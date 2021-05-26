import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./Management/index";
import RegistrarDistribuidor from "./Management/SingUp/Index";
import Login from "./Login";
import Administrador from './PreventasAdmin/index'
import SpinerComponent from "./Component/spiner";
import { useSelector } from "react-redux";
import { State } from "./Redux";
import SingUpUsers from './PreventasAdmin/Users/SingUp/Index'
import ListUsers from './PreventasAdmin/Users/ListUsers/index'
import RegisterProduc from './PreventasAdmin/Products/Register/Index'
import ListProducts from './PreventasAdmin/Products/ListProducs/index'
import './app.css'
function App() {
  const state = useSelector((state: State) => state.spiner);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Index} exact />
        <Route path="/" component={Login} exact />
        <Route path="/administrador" component={Administrador} exact />
        <Route path="/registrar-usuarios" component={SingUpUsers} exact />
        <Route path="/todos-los-usuarios" component={ListUsers} exact />
        <Route path="/registrar-producto" component={RegisterProduc} exact />
        <Route path="/todos-los-productos" component={ListProducts} exact />
        <Route
          path="/registrar-distribuidor"
          component={RegistrarDistribuidor}
          exact
        />
      </Switch>
      { state ? <SpinerComponent /> : null}
    </BrowserRouter>
  );
}

export default App;
