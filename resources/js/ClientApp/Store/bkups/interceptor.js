import axios from 'axios';
import store from './index'
import router from '../Router/index'

function onUploadProgress(ev) {
  let percentCompleted = Math.floor((ev.loaded * 100) / ev.total);
  console.log(percentCompleted);
  // do your thing here
}

function handleUploadProgress(ev) {
  console.log(ev);
  // do your thing here
}
//si el interceptor recibe errores de tipo 401 o 419, tira el user en local storage y vuex, y dsps nos redirije/vuerouter al login
export default function setup() {

  // Add a request interceptor
  axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    //config.onUploadProgress = onUploadProgress;
    //config.handleUploadProgress = handleUploadProgress
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


  axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response
  }, function (error) {
    // Do something with response error
    if (error.response.status === 401 || error.response.status === 419) {
      console.log("Unauthorized Request")
      store.commit('LOG_OUT')
      router.push('login')
    }
    return Promise.reject(error)
  })
}