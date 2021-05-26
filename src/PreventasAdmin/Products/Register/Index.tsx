import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import ProductForm from "./ProductForm";
import { httpPost } from "../../../Services/Services";
import { URL } from "../../../Constans/Constans";
import NavBarComponent from "../../../Component/NavBarAdmin";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../Redux";
import { State } from "../../../Redux";
import { useHistory } from "react-router-dom";
const Index = () => {
  interface formDataRegister {
    name?: string;
    description?: string;
    stock?: number;
    sell_price?: number;
    price_buy?: number;
    empresaid?: number;
  }

  interface productoConsultar {
    idProducto: number;
  }
  const [form, setForm] = useState<formDataRegister>({});
  const dispatch = useDispatch();
  const { spinerActive, editarProducto } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const state = useSelector((state: State) => state.user);
  const producto = useSelector((state: State) => state.editarProducto);
  const history = useHistory();
  const handledForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setForm({ ...form, empresaid: state.idEmpresa, stock: 0 });
    if (producto) {
      consultarProducto()
    }

    console.log(producto)
  }, []);

  const consultarProducto = () => {
    spinerActive(true);
    const id: productoConsultar = {
      idProducto: producto
    }
    httpPost<productoConsultar, formDataRegister>(URL.producto, id)
      .then((response) => {
        if (response.data) {
          setForm(response.data);
          spinerActive(false);
        } else {
          spinerActive(false);
        }
      })
      .catch(() => {});
  };

  const onSubmit = (event: Event) => {
    event.preventDefault();
    editarProducto(0);
    spinerActive(true);
    httpPost<formDataRegister, boolean>(URL.registrarProducto, form)
      .then((response) => {
        if (response.data) {
          spinerActive(false);
        } else {
          spinerActive(false);
        }
      })
      .catch(() => {});
  };

  const cancelar = () => {
    history.push("/administrador");
  };

  return (
    <div className="contenedor-admin">
      <NavBarComponent />
      <div className="centrar-user">
        <ProductForm
          cancelar={cancelar}
          onSubmit={onSubmit}
          onChange={handledForm}
        />
      </div>
    </div>
  );
};

export default Index;
