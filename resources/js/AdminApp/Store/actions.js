// importing the helper
import interceptorsSetup from './interceptor'
interceptorsSetup()
//
const entryPoint = ""//process.env.MIX_APP_URL "http://127.0.0.1:8000"
//console.log(entryPoint)
//
const actions = {

  async getMainData({ commit }) {
    const res = await axios.get(entryPoint + '/api/mainData')
    commit('SET_MAIN_DATA', res.data)
    //console.log(res);
  },
  async storeCategory({ commit }, payload) {
    const res = await axios.post(entryPoint + '/api/storeCategory', payload)
    //commit('SET_MAIN_DATA', res.data)
    //console.log(res);
    return res;
  },
  async updateCategory({ commit }, payload) {
    const res = await axios.post(entryPoint + '/api/updateCategory', payload)
    //commit('SET_MAIN_DATA', res.data)
    //console.log(res);
    return res;
  },
  /*
  async storeMaterial({ commit }, payload) {
    const res = await axios.post(entryPoint + '/api/storeMaterial', payload)
    //commit('SET_MAIN_DATA', res.data)
    //console.log(res);
    return res;
  },
  async updateMaterial({ commit }, payload) {
    const res = await axios.post(entryPoint + '/api/updateMaterial', payload)
    //commit('SET_MAIN_DATA', res.data)
    //console.log(res);
    return res;
  },

  async storeProcess({ commit }, payload) {
    const res = await axios.post(entryPoint + '/api/storeProcess', payload)
    commit('STORE_PROCESS', res.data.process)
    //console.log(res);
    return res;
  },
  async updateProcess({ commit }, payload) {
    const res = await axios.post(entryPoint + '/api/updateProcess', payload)
    //commit('SET_MAIN_DATA', res.data)
    //console.log(res);
    return res;
  },
*/
}

export default actions