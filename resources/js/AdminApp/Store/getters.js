const getters = {
  isLogged: state => {//validar mejor esta chanchada
    return (state.user != '') && (localStorage.getItem('access_token') != '');
  },
  mainData: state => {
    return state.mainData
  }
}

export default getters