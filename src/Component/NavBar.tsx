import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {MENU} from '../Constans/Constans'

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
          <Nav.Link href="/">{MENU.inicio}</Nav.Link>
          <NavDropdown title="Distribuidores" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/registrar-distribuidor">{MENU.distribuidores.registrar}</NavDropdown.Item>
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
