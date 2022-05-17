import VueRouter from 'vue-router'
import routes from './routes'
import store from '../Store/index.js'

const router = new VueRouter({
    mode: 'history',
    routes
})
//Guards

router.beforeEach((to, from, next) => {
    const authenticatedUser = store.getters.isLogged;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !authenticatedUser) next('login')// si no auth mandarlo al login
    //else if (!requiresAuth && authenticatedUser) next('/')// si esta auth no dejarlo ir al login/register
    else next();// si todo ok ir al intended place
  });

export default router