const mutations = {
  SET_LOADING(state, payload) {
    state.loading = payload
  },
  SET_ACCESS_TOKEN(state, token) {
    state.access_token = token
    localStorage.setItem('access_token', JSON.stringify(state.access_token))
  },
  SET_USER(state, user) {
    state.user = user
    localStorage.setItem('user', JSON.stringify(state.user))
  },
  RESET_PASSWORD(state, user) {
    console.log(state.user, user);
  },
  LOG_OUT(state) {
    state.access_token = null
    state.user = ''
    localStorage.removeItem('access_token')
    localStorage.removeItem('user')
  },
  SET_MAIN_DATA(state, payload) {
    //console.log(payload)
    state.mainData.parent_categories = payload.parent_categories
    //console.log(payload);
    //localStorage.setItem('access_token', JSON.stringify(state.access_token))
  },
  SET_CATS_FILTER_CHANGED(state, payload) {
    state.mainData.catsFilterChanged = payload
  },


  SET_ENTITIES(state, payload) {
    if (state.mainData?.catsFilterChanged) {//chanchada para limpiar el feed si cambiaron el filtro
      state.mainData.entities = {
        data: [],
      }
    }
    state.mainData.entities.data.push(...payload.data)
    state.mainData.entities.last_page = payload.last_page
    //localStorage.setItem('access_token', JSON.stringify(state.access_token))
  },
  SET_USER_ENTITY(state, payload) {
    state.mainData.user_entities.push(payload)
  },
  SET_USER_ENTITIES(state, payload) {
    state.mainData.user_entities = payload
  },
  UPDATE_ENTITY(state, payload) {
    //state.user.entities.find(el => el.id == payload.id) = oayload
    const targetEntity = state.mainData.user_entities.find(f => f.id === payload.id)
    state.mainData.user_entities.splice(state.mainData.user_entities.indexOf(targetEntity), 1, payload)
  },
  SET_USER_BOOKMARKS(state, payload) {
    state.mainData.user_bookmarks = payload
  },
  BOOKMARK_ENTITY(state, payload) {
    //actualizamos el estado de la entidad en el mainData entities
    const targetEntity = state.mainData.entities.data.find(f => f.id === payload.id)
    state.mainData.entities.data.splice(state.mainData.entities.data.indexOf(targetEntity), 1, payload)
    //si el usuario lo activo desde sus bookmarks, lo eliminamos de su lista.,,
    //esto hay que arreglaro con otro mutation o otro respons,,,porque la data esta pagineada, y puede cambiar la cantidad por pagina y romper
    const te = state.mainData.user_bookmarks.data.find(f => f.id === payload.id)
    state.mainData.user_bookmarks.data.splice(state.mainData.user_bookmarks.data.indexOf(te), 1);

    //console.log(targetEntity)
    //targetEntity = payload
  },
  RESET_ENTITIES(state) {
    state.mainData.entities = {
      data: []
    }
  }
}
export default mutations