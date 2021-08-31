/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-08-31 09:28:59
 * @LastEditTime: 2021-08-31 11:31:44
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import RenderRouterVue from '../components/RenderRouterVue.vue'

Vue.use(VueRouter)
const routes = [
  { 
    path: '/login',
    // component: RenderRouterVue,
    component: {render: h=> h("router-view")},
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () =>
          import(/* webpackChunkName: "user" */ '../views/User/Login'),
      },
      {
        path: '/user/register',
        name: 'register',
        component: () =>
          import(/* webpackChunkName: "user" */ '../views/User/Register'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
