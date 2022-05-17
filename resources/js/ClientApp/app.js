require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './Router/index'
import store from './Store/index'
import App from './App.vue'

//import "./registerServiceWorker";
//bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
//import "@/assets/css/custom.css";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
Vue.component('v-select', vSelect)
Vue.use(VueRouter)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
//mix.js('resources/js/app.js', 'public/js').vue()
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App }
})
/*
new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
*/