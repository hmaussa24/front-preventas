import {UserInfo} from '../actions/index'
import {Action} from '../actions/index'
import {ActionTypes} from '../action-types/index'

const initialState: UserInfo = {
 addres: '',
 email: '',
 id: 0,
 idEmpresa: 0,
 image: '',
 name: '',
 phone: '',
 rol: '',
 exito: false

};


const usuario = (state: UserInfo = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.USER:
      return (state = {
        ...state,
        name: action.payload.name,
        phone: action.payload.phone,
        addres: action.payload.addres,
        email: action.payload.email,
        image: action.payload.image,
        id: action.payload.id,
        idEmpresa: action.payload.idEmpresa,
        rol: action.payload.rol,
        exito: action.payload.exito
    
      });
  }
  return state;
};


export default usuario