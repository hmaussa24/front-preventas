import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import SingUpForm from "./SingUpForm";
import { httpPost } from "../../../Services/Services";
import { URL } from "../../../Constans/Constans";
import NavBarComponent from "../../../Component/NavBarAdmin";
import { useDispatch,  useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../Redux";
import { State } from "../../../Redux";
const Index = () => {
  interface formDataRegister {
    name?: string;
    addres?: string;
    phone?: string;
    email?: string;
    password?: string;
    rol?: number;
    empresaid?: number;
  }
  const [form, setForm] = useState<formDataRegister>({});
  const dispatch = useDispatch();
  const { spinerActive } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state.user);

  const handledForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setForm({...form, empresaid: state.idEmpresa, rol: 2});
    console.log(form)
  },[])

  const onSubmit = (event: Event) => {
    event.preventDefault();
    console.log(form);
    spinerActive(true);
    httpPost<formDataRegister, boolean>(URL.resgistrarUsuario, form)
      .then((response) => {
        if (response.data) {
          spinerActive(false);
        }else{
          spinerActive(false);
        }
      })
      .catch(() => {});
  };

  return (
    <div className="contenedor-admin">
      <NavBarComponent />
      <div className="centrar-user">
        <SingUpForm onSubmit={onSubmit} onChange={handledForm} />
      </div>
    </div>
  );
};

export default Index;
