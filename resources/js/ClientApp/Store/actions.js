// importing the helper
import interceptorsSetup from './interceptor'
interceptorsSetup()


const actions = {
  async registerUser({ commit }, payload) {
    const res = await axios.post('/api/register', payload)
    return res
    //console.log(res.data.user)
    //await dispatch('logUser')
    // commit('SET_USER', respMe.data) //pseudo login
  },
  async login({ commit }, payload) {
    
    const res = await axios.post('/api/login', payload)
    //console.log(res)
    commit('SET_USER', res.data.user)
    commit('SET_ACCESS_TOKEN', res.data.access_token)
    return res;
  },
  async logout({ commit }) {

    const resp = await axios.post('/api/logout', {})
    commit('LOG_OUT')
  },
  //
  async updateUserDetails({ commit }, payload) {
    const config = {
      headers: { Authorization: `Bearer ${this.state.access_token}` }
    };
    const respMe = await axios.post('/api/updateUserDetails', payload, config)
    commit('SET_USER', respMe.data)
    //console.log(respMe.data)
    return respMe
  },
  async storeProfilePic({ commit }, payload) {
    const respMe = await axios.post('/api/storeProfilePic', payload)
    commit('SET_USER', respMe.data.user)
    //console.log(respMe);
    return respMe
  },
  //
  async storeEntityProfilePic({ commit }, payload) {
    const respMe = await axios.post('/api/storeEntityProfilePic', payload)
    //commit('SET_USER', respMe.data.user)
    //console.log(respMe);
    return respMe
  },
  //
  async updatePassword({ commit }, payload) {
    const resp = await axios.post('/api/changePassword', payload)
    commit('RESET_PASSWORD', resp.data)
    return resp
  },
  async forgotPassword({ commit }, payload) {
    const resp = await axios.post('/api/forgot-password', payload)
    commit('RESET_PASSWORD', resp.data)
    return resp
  },
  async resetPassword({ commit }, payload) {
    const resp = await axios.post('/api/reset-password', payload)
    commit('RESET_PASSWORD', resp.data)
    return resp
  },

  async getCategories({ commit }) {
    const res = await axios.get('/api/categories')
    console.log(res);
    commit('SET_CATEGORIES', res.data)
  },

  //Entities
  async getUserEntities({ commit }) {
    const res = await axios.get('/api/user/entities')
    commit('SET_USER_ENTITIES', res.data)
    return res
    //console.log(res);
  },
  async getEntity({ commit }, username) {
    //console.log('get bookmarks')
    //no lo persisitimos en el store
    const res = await axios.get('/api/entities/' + username)
    //console.log(res.data)
    //commit('SET_USER_BOOKMARKS', res.data)
    return res
  },
  async storeEntity({ commit }, payload) {
    console.log(payload);
    const res = await axios.post('/api/user/entities', payload)
    console.log(res);
    commit('SET_USER_ENTITY', res.data)
    return res;
  },
  async updateEntity({ commit }, payload) {
    //console.log(payload);
    const res = await axios.put('/api/user/entities/' + payload.id, payload)
    //console.log(res);
    commit('UPDATE_ENTITY', res.data)
    return res;
  },
  async deletePost({ commit }, payload) {
    //console.log(payload);
    const res = await axios.delete('/api/posts/' + payload)
    //console.log(res);
    //commit('UPDATE_ENTITY', res.data)
    return res;
  },
  //bookmarks
  async bookmarkEntity({ commit }, payload) {
    //console.log(payload);
    const res = await axios.post('/api/bookmarkEntity/' + payload.id)
    //console.log(res.data);
    commit('BOOKMARK_ENTITY', res.data)
    return res;
  },
  async getUserBookmarks({ commit }) {
    //console.log('get bookmarks')
    const res = await axios.get('/api/userBookmarks/' + this.state.user.id)
    //console.log(res.data)
    commit('SET_USER_BOOKMARKS', res.data)
    return res
  },
}

export default actions