
export interface UserInfo {
    name: string;
    phone: string;
    addres: string;
    email: string;
    image: string;
    rol: string;
    idEmpresa: number;
    id: number;
    exito: boolean;
  }
  
 export  type Action = {
    type: string;
    payload: UserInfo;
  };

  export type SpinerAction = {
    type: string;
    payload: boolean;
  }

  export type EditarProducto = {
    type: string;
    payload: number;
  }
