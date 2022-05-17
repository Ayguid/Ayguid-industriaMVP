import store from '../Store'

const routes = [
  {
    path: '/',
    //props: route => ({ filter: { catIds: route.query.catIds, location: route.query.location } }), //http://127.0.0.1:8000/?q=vue, para poder pasar los parametros del filtro,,,,
    /*
    beforeEnter: (to, from) => {

    },
    */
    component: () => import('../Pages/LandingPage.vue'),
    name: 'Landing'
  },
  {
    path: '/about',
    component: () => import('../Pages/AboutPage.vue'),
    name: 'about'
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/RegisterPage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/LoginPage.vue')
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/ForgotPasswordPage.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/ProfilePage.vue'),
    //beforeEnter: guardMyroute,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/SettingsPage.vue'),
    //beforeEnter: guardMyroute,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/userentities',
    name: 'UserEntities',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/UserEntitiesPage.vue'),
    //beforeEnter: guardMyroute,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/userbookmarks',
    name: 'UserBookmarks',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/UserBookmarksPage.vue'),
    //beforeEnter: guardMyroute,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/entity/:username',
    props: true,
    name: 'Entity',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/EntityPage.vue'),
    //beforeEnter: guardMyroute,
    meta: {
      requiresAuth: true
    }
  },
]

export default routes