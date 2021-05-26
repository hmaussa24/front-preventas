import NavBarComponent from "../../../Component/NavBarAdmin";
import CardProducts from "../../../Component/CardProducts";
import { CardColumns } from "react-bootstrap";
import "./listusers.css";
import { useEffect, useState } from "react";
import { httpGet, httpPost } from "../../../Services/Services";
import { State } from "../../../Redux";
import { URL } from "../../../Constans/Constans";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../Redux";
import { useHistory } from "react-router-dom";
const ListProducts = () => {
  type product = {
    name: string;
    description: string;
    stock: number;
    id: number;
    sell_price: number;
    buy_price: number;
    image: string;
    state: number;
  };

  interface desabilitar {
    idProducto: number;
  }

  const dispatch = useDispatch();
  const { spinerActive, editarProducto } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const [productsAll, setProducts] = useState<product[]>([]);
  const state = useSelector((state: State) => state.user);
  const history = useHistory();
  useEffect(() => {
    consultraProductos();
  }, []);

  const consultraProductos = () => {
    spinerActive(true);
    httpGet<product[]>(URL.allPrducts, {
      params: { empresaid: state.idEmpresa },
    })
      .then((response) => {
        setProducts(response.data);
        spinerActive(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deshabilitar = (idProducto: desabilitar) => {
    spinerActive(true);
    httpPost<desabilitar, boolean>(URL.desabilitarProducto, idProducto)
      .then((response) => {
        if (response.data) {
          consultraProductos();
        } else {
          console.log("Error");
        }
        spinerActive(false);
      })
      .catch((eror) => {
        console.log(eror);
        spinerActive(false);
      });
  };

  const habilitar = (idProducto: desabilitar) => {
    spinerActive(true);
    httpPost<desabilitar, boolean>(URL.habilitarProducto, idProducto)
      .then((response) => {
        if (response.data) {
          consultraProductos();
        } else {
          console.log("Error");
        }
        spinerActive(false);
      })
      .catch((eror) => {
        console.log(eror);
        spinerActive(false);
      });
  };

  const eliminar = (idProducto: desabilitar) => {
    spinerActive(true);
    httpPost<desabilitar, boolean>(URL.eliminarProducto, idProducto)
      .then((response) => {
        if (response.data) {
          consultraProductos();
        } else {
          console.log("Error");
        }
        spinerActive(false);
      })
      .catch((eror) => {
        console.log(eror);
        spinerActive(false);
      });
  };

  const editar = (idProducto: desabilitar) => {
    editarProducto(idProducto.idProducto);
    history.push("/registrar-producto", idProducto);
  };

  return (
    <div className="contenedor-admin">
      <NavBarComponent />
      <div className="card-users">
        <CardColumns>
          {productsAll.map((item) => (
            <CardProducts
              key={item.id}
              name={item.name}
              description={item.description}
              stock={item.stock}
              id={item.id}
              sell_price={item.sell_price}
              buy_price={item.buy_price}
              image={item.image}
              state={item.state}
              desabilitar={deshabilitar}
              habilitar={habilitar}
              eliminar={eliminar}
              editar={editar}
            />
          ))}
        </CardColumns>
      </div>
    </div>
  );
};

export default ListProducts;
