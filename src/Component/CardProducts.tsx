import { Badge, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { idText } from "typescript";
type propsTypes = {
  name: string;
  description: string;
  stock: number;
  id: number;
  sell_price: number;
  buy_price: number;
  image: string;
  state: number;
  desabilitar: any;
  habilitar: any;
  eliminar: any;
  editar: any;
};
const CardProduct = (props: propsTypes) => {
  const {
    name,
    description,
    stock,
    id,
    sell_price,
    buy_price,
    image,
    state,
    desabilitar,
    habilitar,
    eliminar,
    editar,
  } = props;
  return (
    <div className="card-user">
      <Card>
        <Card.Img
          variant="top"
          src="https://via.placeholder.com/300x200/807e7e"
        />
        <Card.Body>
          <Card.Title>
            {name}
            <Badge variant={state === 1 ? "danger" : "dark"} className="baged">
              Venta:{" "}
              <NumberFormat
                value={sell_price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </Badge>
            <Badge variant={state === 1 ? "info" : "dark"} className="baged">
              Compra:{" "}
              <NumberFormat
                value={buy_price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </Badge>
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{description}</ListGroupItem>
          <ListGroupItem> {stock} </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link
            onClick={() => {
              eliminar({ idProducto: id });
            }}
          >
            Eliminar
          </Card.Link>
          {state === 1 ? (
            <Card.Link
              onClick={() => {
                desabilitar({ idProducto: id });
              }}
            >
              Desabilitar
            </Card.Link>
          ) : (
            <Card.Link
              onClick={() => {
                habilitar({ idProducto: id });
              }}
            >
              Habilitar
            </Card.Link>
          )}
          <Card.Link
            onClick={() => {
              editar({ idProducto: id });
            }}
          >
            Editar
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduct;
