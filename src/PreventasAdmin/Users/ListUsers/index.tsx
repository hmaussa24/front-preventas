import NavBarComponent from "../../../Component/NavBarAdmin";
import CardUsers from "../../../Component/CardUsers";
import { CardColumns } from "react-bootstrap";
import "./listusers.css";
import { useEffect, useState } from "react";
import { httpGet } from "../../../Services/Services";
import { State } from "../../../Redux";
import { URL } from "../../../Constans/Constans";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../Redux";
import "holderjs";

const ListUsers = () => {
  type user = {
    name: string;
    email: string;
    addres: string;
    id: number;
    phone: string;
    rol: string;
  };

  const dispatch = useDispatch();
  const { spinerActive } = bindActionCreators(actionCreators, dispatch);
  const [usersAll, setUsers] = useState<user[]>([]);
  const state = useSelector((state: State) => state.user);
  useEffect(() => {
    
    spinerActive(true);
    httpGet<user[]>(URL.allUsers, { params: { empresaid: state.idEmpresa } })
      .then((response) => {
        setUsers(response.data);
        spinerActive(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="contenedor-admin">
      <NavBarComponent />
      <div className="card-users">
        <CardColumns>
          {usersAll.map((item) => (
            <CardUsers
              key={item.id}
              name={item.name}
              addres={item.addres}
              email={item.email}
              id={item.id}
              phone={item.phone}
              rol={item.rol}
            />
          ))}
        </CardColumns>
      </div>
    </div>
  );
};

export default ListUsers;
