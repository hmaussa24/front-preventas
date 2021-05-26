import { Badge, Card, ListGroup, ListGroupItem } from "react-bootstrap";


type propsTypes = {
  name: string;
  email: string;
  addres: string;
  id: number;
  phone: string;
  rol: string
}
const CardUsers = (props: propsTypes) => {
  const {name, email, addres, id, phone, rol} = props;
  return (
    <div className="card-user" >
      <Card >
        <Card.Img variant="top" src="https://via.placeholder.com/300x200/807e7e" />
        <Card.Body>
          <Card.Title>{name}<Badge variant="info" className="baged">{rol}</Badge></Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{email}</ListGroupItem>
          <ListGroupItem> {addres} </ListGroupItem>
          <ListGroupItem> {phone} </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Eliminar</Card.Link>
          <Card.Link href="#">Desabilitar</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardUsers;
