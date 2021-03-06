/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-08-31 09:28:59
 * @LastEditTime: 2021-08-31 15:11:48
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../404.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import RenderRouterVue from '../components/RenderRouterVue.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    // component: RenderRouterVue,
    // component: {render: h=> h("router-view")},
    component: () =>
      import(/* webpackChunkName: "Layout" */ '../Layout/UserLayout'),
    children: [
      {
        path: '/user',
        redirect: '/user/login', 
      },
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
      // {
      //   path: '/user/register-result',
      //   name: 'register.result',
      //   component: () =>
      //     import(/* webpackChunkName: "user" */ '../views/User/RegisterResult'),
      // },
    ],
  },
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName "layout" */ '../Layout/BasicLayout'),
    children: [
      // dashboard
      {
        path: '/',
        redirect: '/dashboard/analysis',
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: { icon: 'dashboard', title: '仪表盘' },
        component: { render: (h) => h('router-view') },
        children: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            meta: { title: '分析页' },
            component: () =>
              import(
                /* webpackChunkName "dashboard" */ '../views/Dashboard/Analysis'
              ),
          },
        ],
      },
    ],
  },
  // form
  {
    path: '/form',
    name: 'form',
    component: { render: (h) => h('router-view') },
    meta: { icon: 'form', title: '表单' },
    children: [
      {
        path: '/form/basic-form',
        name: 'basicform',
        meta: { title: '基础表单' },
        component: () =>
          import(/* webpackChunkName: "form" */ '../views/Forms/BasicForm'),
      },
      {
        path: '/form/step-form',
        name: 'stepform',
        hideChildrenInMenu: true,
        meta: { title: '分布表单' },
        component: () =>
          import(/* webpackChunkName: "form" */ '../views/Forms/StepForm'),
        children: [
          {
            path: '/form/step-form',
            redirect: '/form/step-form/info',
          },
          {
            path: '/form/step-form/info',
            name: 'info',
            component: () =>
              import(
                /* webpackChunkName: "form" */ '../views/Forms/StepForm/Step1'
              ),
          },
          {
            path: '/form/step-form/confirm',
            name: 'confirm',
            component: () =>
              import(
                /* webpackChunkName: "form" */ '../views/Forms/StepForm/Step2'
              ),
          },
          {
            path: '/form/step-form/result',
            name: 'result',
            component: () =>
              import(
                /* webpackChunkName: "form" */ '../views/Forms/StepForm/Step3'
              ),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// 路由守卫
router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})

router.afterEach(()=>{
  NProgress.done()
})

export default router
