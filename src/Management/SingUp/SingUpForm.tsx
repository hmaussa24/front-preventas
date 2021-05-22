import { Button, Form } from "react-bootstrap";
import "./singup.css";
import { LABESLS } from "../../Constans/Constans";

type propsType = {
  onSubmit: any;
  onChange: any;
};

const SingUpForm = (props: propsType) => {
  const { onSubmit, onChange } = props;
  return (
    <Form className="centrar" onSubmit={onSubmit}>
      <h1>Registro de una nueva empresa</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{LABESLS.name}</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Ingrese el nombre de la empresa"
          onChange={onChange}
        />
        <Form.Text className="text-muted">
          Nombre completo de la empresa
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{LABESLS.email}</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="suempresa@suempresa.com"
          onChange={onChange}
        />
        <Form.Text className="text-muted">
          E-mail de la empresa
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{LABESLS.description}</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          placeholder="Descripcion de la empresa"
          onChange={onChange}
        />
        <Form.Text className="text-muted">
          Escriba una descripcion brebe del la empresa
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{LABESLS.adders}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el nombre de la empresa"
          onChange={onChange}
          name="addres"
        />
        <Form.Text className="text-muted">
          Direccion esacta de las oficinas de la empresa
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{LABESLS.phone}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el nombre de la empresa"
          onChange={onChange}
          name="phone"
        />
        <Form.Text className="text-muted">
          Numero de telefono de la empresa
        </Form.Text>
      </Form.Group>
      <Button variant="secondary">Cancelar</Button>{" "}
      <Button variant="primary" type="submit">
        Registrar
      </Button>
    </Form>
  );
};

export default SingUpForm;
