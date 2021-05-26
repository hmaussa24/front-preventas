import { UserInfo } from "../Redux/actions/index";
import { useState } from "react";
import { URL } from "../Constans/Constans";
import "./login.css";
import { httpPost } from "../Services/Services";
import { useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators  } from "../Redux";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";
const Login = () => {
  interface Login {
    email?: string;
    password?: string;
  }
  const dispatch = useDispatch();
  const { infoUser, spinerActive } = bindActionCreators(actionCreators, dispatch);
  const history = useHistory();
  const [form, setForm] = useState<Login>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  const handledForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: Event) => {
    event.preventDefault();
    spinerActive(true);
    httpPost<Login, UserInfo>(URL.login, form)
      .then((response) => {
        console.log(response.data);
        //TODO
        if (response.data.exito) {
          infoUser(response.data);
          if (response.data.rol === "Administrador") {
            spinerActive(false);
            history.push("/administrador");
          }
          if(response.data.rol === "Management"){
            spinerActive(false);
            history.push("/home")
          }
        }else{
          spinerActive(false);
          setIsValid(true);
        }
      })
      .catch(() => {});
  };

  return (
    <div className="contenedor">
      <div className="centrar-login">
        <LoginForm onChange={handledForm} onSubmit={onSubmit} isValid={isValid} />
      </div>
    </div>
  );
};

export default Login;
