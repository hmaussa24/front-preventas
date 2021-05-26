import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MENU } from "../Constans/Constans";

const NavBarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#">Preventas</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link>
            <Link to="/administrador">{MENU.inicio}</Link>
          </Nav.Link>
          <NavDropdown title="Productos" id="navbarScrollingDropdown">
            <NavDropdown.Item>
              <Link to="/todos-los-productos">Todos los productos</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/registrar-producto">Registrar Producto</Link>
            </NavDropdown.Item>
            {/* <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item> */}
          </NavDropdown>
          <NavDropdown title="Usuarios" id="navbarScrollingDropdown">
            <NavDropdown.Item>
              <Link to="/todos-los-usuarios">Todos los Usuarios</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/registrar-usuarios">Registrar usuario</Link>
            </NavDropdown.Item>

            {/* <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarComponent;
