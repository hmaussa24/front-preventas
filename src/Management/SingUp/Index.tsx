import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import SingUpForm from "./SingUpForm";
import { httpPost } from "../../Services/Services";
import {URL} from '../../Constans/Constans'
const Index = () => {
  type formDataRegister = {
    name?: string;
    description?: string;
    addres?: string;
    phone?: string;
    email?: string;
  };
  const [form, setForm] = useState<formDataRegister>({});

  const handledForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: Event) => {
    event.preventDefault();
    console.log(form);
    httpPost<formDataRegister, boolean>(URL.resgistraEmpresa, form)
      .then((response) => {
        console.log(response);
      })
      .catch(() => {

      });
  };

  return (
    <Container fluid>
      <SingUpForm onSubmit={onSubmit} onChange={handledForm} />
    </Container>
  );
};

export default Index;
