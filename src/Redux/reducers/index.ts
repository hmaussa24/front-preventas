import {combineReducers} from 'redux';
import userReducer from './userReducer';
import spinerReducer from './spinerReducer'
import editarProducto from './editarProducto'

const reducers = combineReducers({
    user: userReducer,
    spiner: spinerReducer,
    editarProducto: editarProducto, 
});

export default reducers;

export type State = ReturnType<typeof reducers>;