require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './Router/index'
import store from './Store/index'
import App from './App.vue'
//import vtoast from "./Components/Vtoast";
//import "./registerServiceWorker";
//bootstrap
//import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Import Bootstrap an BootstrapVue CSS files (order is important)
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap-vue/dist/bootstrap-vue.css";
//import "@/assets/css/custom.css";
import vuetify from './vuetify' // path to vuetify export


Vue.use(VueRouter)
// Make BootstrapVue available throughout your project
//Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
//Vue.use(IconsPlugin);
//mix.js('resources/js/app.js', 'public/js').vue()


const app = new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: { App }
})
/*
new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
*/