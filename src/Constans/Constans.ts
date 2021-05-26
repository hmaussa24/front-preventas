export const MENU = {
  inicio: "Inicio",
  distribuidores: 
      {
          registrar: "Resgistrar",
      }
  
}

export const LABESLS = {
    name: "Nombre de la empresa",
    description: "Descripcion",
    adders: "Direccion",
    phone: "Telefono",
    image: "Imagen",
    email: "E-mail"
}

const baseURL='http://localhost:4000/'

export const URL = {
    resgistraEmpresa: `${baseURL}registrar-empresa`,
    login: `${baseURL}login`,
    resgistrarUsuario: `${baseURL}registrar-usuario`,
    allUsers: `${baseURL}users`,
    allPrducts: `${baseURL}productos`,
    registrarProducto: `${baseURL}registrar-producto`,
    desabilitarProducto: `${baseURL}desabilitar-producto`,
    habilitarProducto: `${baseURL}habilitar-producto`,
    eliminarProducto: `${baseURL}eliminar-producto`,
    producto: `${baseURL}producto`,

}