import { Action, UserInfo, SpinerAction, EditarProducto } from "../actions/index"
import { ActionTypes } from "../action-types"
import { Dispatch } from "redux"

export const infoUser = (user: UserInfo) => {
    return  (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.USER,
            payload: user
        })
    }
}


export const spinerActive = (active: boolean) => {
    return (dispatch: Dispatch<SpinerAction>) => {
        dispatch({
            type: ActionTypes.SPINER,
            payload: active
        })
    }
}

export const editarProducto = (idProducto: number) => {
    return (dispatch: Dispatch<EditarProducto>) => {
        dispatch({
            type: ActionTypes.EDITARPRODUCTO,
            payload: idProducto
        })
    }
}