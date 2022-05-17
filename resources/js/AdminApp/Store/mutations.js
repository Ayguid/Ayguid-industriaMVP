import { dfs } from "../helpers/iterator";

const mutations = {
  SET_MAIN_DATA(state, payload) {
    state.mainData = payload
    //console.log(payload);
    //localStorage.setItem('access_token', JSON.stringify(state.access_token))
  },
  STORE_PROCESS(state, payload) {
    //console.log(payload)
    //payload.children = [] // chanchada para que no rompa el iterator
    if (!payload.parent_id) {//si es padre
      state.mainData.processes.push(payload)
    } else {//si es hijo
      let found = null;
      for (let obj of state.mainData.processes) {
        found = dfs(obj, payload.parent_id);
        if (found) {
          found.children.push(payload)
          break;
        }
      }
    }
  }
}
export default mutations