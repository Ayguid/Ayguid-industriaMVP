// importing the helper
import interceptorsSetup from './interceptor'
interceptorsSetup()
//
const entryPoint = ""// process.env.MIX_APP_URL "http://127.0.0.1:8000"
//console.log(entryPoint);
//
const actions = {
  async registerUser({ commit }, payload) {

    const res = await axios.post(entryPoint + '/api/register', payload)
    //console.log(res.data.user)
    //await dispatch('logUser')
    // commit('SET_USER', respMe.data) //pseudo login

  },
  async logUser({ commit }, payload) {
    //nuevo metodo para usar el token que laravel guarda en los cookies
    //Of course, if your user's session expires due to lack of activity, 
    //subsequent requests to the Laravel application may receive 401 or 419 HTTP error response. 
    //In this case, you should redirect the user to your SPA's login page.
    await axios.get('/sanctum/csrf-cookie').then(response => {
      console.log(response)
    });
    const logDetails = await axios.post(entryPoint + '/api/login', payload)
    commit('SET_USER', logDetails.data.user)
  },
  async updateUserDetails({ commit }, payload) {
    const respMe = await axios.post(entryPoint + '/api/updateUserDetails', payload)
    commit('SET_USER', respMe.data)
    //console.log(respMe.data)
    return respMe
  },
  async storeProfilePic({ commit }, payload) {
    const respMe = await axios.post(entryPoint + '/api/storeProfilePic', payload)
    commit('SET_USER', respMe.data.user)
    //console.log(respMe);
    return respMe
  },
  async updatePassword({ commit }, payload) {
    const resp = await axios.post(entryPoint + '/api/changePassword', payload)
    commit('RESET_PASSWORD', resp.data)
    return resp
  },
  async forgotPassword({ commit }, payload) {
    const resp = await axios.post(entryPoint + '/api/forgot-password', payload)
    commit('RESET_PASSWORD', resp.data)
    return resp
  },
  async resetPassword({ commit }, payload) {
    const resp = await axios.post(entryPoint + '/api/reset-password', payload)
    commit('RESET_PASSWORD', resp.data)
    return resp
  },
  async logout({ commit }) {
    const resp = await axios.post(entryPoint + '/api/logout')
    commit('LOG_OUT')
  },
  async getMainData({ commit }) {
    const res = await axios.get(entryPoint + '/api/mainData')
    //console.log(res);
    commit('SET_MAIN_DATA', res.data)
  },
  async getEntities({ commit }, payload) {
    //console.log(payload)
    const res = await axios.get(entryPoint + '/api/entitiesListing?page=' + payload.page, payload.params)
    commit('SET_ENTITIES', res.data)
    //console.log(res);
  },
  setCatsFilterChanged({ commit }, payload) {
    commit('SET_CATS_FILTER_CHANGED', payload)
  },
  resetEntities({ commit }) {
    commit('RESET_ENTITIES')
  },
  //
  async getUserEntities({ commit }) {
    const res = await axios.get(entryPoint + '/api/userEntities/' + this.state.user.id)
    commit('SET_USER_ENTITIES', res.data)
    return res
    //console.log(res);
  },
  async storeEntity({ commit }, payload) {
    console.log(payload);
    const res = await axios.post(entryPoint + '/api/storeEntity', payload)
    //console.log(res);
    commit('SET_USER_ENTITY', res.data)
    return res;
  },
  async updateEntity({ commit }, payload) {
    //console.log(payload);
    const res = await axios.post(entryPoint + '/api/updateEntity/' + payload.id, payload)
    //console.log(res);
    commit('UPDATE_ENTITY', res.data)
    return res;
  },
  async bookmarkEntity({ commit }, payload) {
    //console.log(payload);
    const res = await axios.post(entryPoint + '/api/bookmarkEntity/' + payload.id)
    //console.log(res.data);
    commit('BOOKMARK_ENTITY', res.data)
    return res;
  },
  async getUserBookmarks({ commit }) {
    //console.log('get bookmarks')
    const res = await axios.get(entryPoint + '/api/userBookmarks/' + this.state.user.id)
    //console.log(res.data)
    commit('SET_USER_BOOKMARKS', res.data)
    return res
  },
  async getEntity({ commit }, id) {
    //console.log('get bookmarks')
    //no lo persisitimos en el store
    const res = await axios.get(entryPoint + '/api/showEntity?id=' + id)
    //console.log(res.data)
    //commit('SET_USER_BOOKMARKS', res.data)
    return res
  }
}

export default actions