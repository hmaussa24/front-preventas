import { Button, Form } from "react-bootstrap";
import "./singup.css";
import { LABESLS } from "../../../Constans/Constans";

type propsType = {
  onSubmit: any;
  onChange: any;
};

const SingUpForm = (props: propsType) => {
  const { onSubmit, onChange } = props;
  return (
    <Form className="centrar" onSubmit={onSubmit}>
      <h3>Registro de un nuevo usuario</h3>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Ingrese el nombre del usuario"
          onChange={onChange}
        />
        <Form.Text className="text-muted">
          Nombre completo del usuario
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
        <Form.Text className="text-muted">E-mail del usuario</Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{LABESLS.adders}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese la direcion del usuario"
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
          placeholder="Ingrese telefono del usuario"
          onChange={onChange}
          name="phone"
        />
        <Form.Text className="text-muted">
          Numero de telefono de la empresa
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese la contraseña del usuario"
          onChange={onChange}
          name="password"
        />
        <Form.Text className="text-muted">
          Numero de telefono de la empresa
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>Rol del usuario</Form.Label >
        <Form.Control as="select" custom name="rol" onChange={onChange} placeholder="Seleccione">
          <option value={2}>Vendedor</option>
          <option value={3}>Bodeguero</option>
          <option value={4}>Administrador</option>
        </Form.Control>
      </Form.Group>
      <Button variant="secondary">Cancelar</Button>{" "}
      <Button variant="primary" type="submit">
        Registrar
      </Button>
    </Form>
  );
};

export default SingUpForm;
