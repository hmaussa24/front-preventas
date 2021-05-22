import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./Management/index";
import RegistrarDistribuidor from './Management/SingUp/Index';
import NavBarComponent from "./Component/NavBar";
function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <NavBarComponent />
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/registrar-distribuidor" component={RegistrarDistribuidor} exact />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
