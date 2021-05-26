import {EditarProducto} from "../actions/index";
import { ActionTypes } from "../action-types/index";

const initialState: number = 0;

const editarProducto = (state: number = initialState, action: EditarProducto) => {
  switch (action.type) {
      case ActionTypes.EDITARPRODUCTO:
          return (state = action.payload);
  }
  return state;

};

export default editarProducto;
