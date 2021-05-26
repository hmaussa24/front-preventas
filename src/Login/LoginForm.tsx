import { Button, Form } from "react-bootstrap";

type propsType = {
  onSubmit: any;
  onChange: any;
  isValid: boolean
};

const LoginForm = (props: propsType) => {
  const { onSubmit, onChange, isValid } = props;

  return (
    <Form onSubmit={onSubmit}>
      <h4 className="titulo">Login</h4>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Ingrese email"
          onChange={onChange}
          isInvalid={isValid}
        />
        <Form.Control.Feedback type="invalid">
          Usuario o contraseña invalidos
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          Ingresa el e-mail con el que fue registrado.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={onChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
  );
};

export default LoginForm;
