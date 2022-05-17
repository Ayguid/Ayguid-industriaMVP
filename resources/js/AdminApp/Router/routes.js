const routes = [
  {
    path: '/superadmin',
    component: () => import('../Pages/Landing.vue'),
    name: 'landing'
  },

  {
    path: '/superadmin/materials',
    name: 'Materiales',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/Materials.vue')
  },
  {
    path: '/superadmin/processes',
    name: 'Processes',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/Processes.vue')
  },
  {
    path: '/superadmin/categories',
    name: 'Categories',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/Categories.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/Profile.vue'),
    //beforeEnter: guardMyroute,
    meta: {
      requiresAuth: true
    }
  },
]

export default routes