import { Button, Form } from "react-bootstrap";
import "./singup.css";
import { LABESLS } from "../../../Constans/Constans";

type propsType = {
  onSubmit: any;
  onChange: any;
  cancelar: () => void;
};

const SingUpForm = (props: propsType) => {
  const { onSubmit, onChange, cancelar } = props;
  return (
    <Form className="centrar" onSubmit={onSubmit}>
      <h3>Registro de un nuevo producto</h3>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Ingrese el nombre del producto"
          onChange={onChange}
        />
        <Form.Text className="text-muted">Nombre del producto</Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{LABESLS.description}</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          placeholder="Descripcion detallada del producto"
          onChange={onChange}
        />
        <Form.Text className="text-muted">
          Escriba una descripcion detallada del producto
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Stock inicial</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el stock inical del producto"
          onChange={onChange}
          name="stock"
          defaultValue={0}
        />
        <Form.Text className="text-muted">
          Stock inical del producto por defecto es 0
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Precio de compra</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el precio de compra"
          onChange={onChange}
          name="buy_price"
        />
        <Form.Text className="text-muted">
          El precio por unidad al que usted compra el producto
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Precio de venta</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el precio de venta"
          onChange={onChange}
          name="sell_price"
        />
        <Form.Text className="text-muted">
          El precio por unidad al que usted vendera el producto
        </Form.Text>
      </Form.Group>
      <Button variant="secondary" onClick={cancelar}>Cancelar</Button>{" "}
      <Button variant="primary" type="submit">
        Registrar
      </Button>
    </Form>
  );
};

export default SingUpForm;
