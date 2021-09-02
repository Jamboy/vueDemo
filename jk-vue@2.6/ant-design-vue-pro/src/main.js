/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-08-31 09:28:59
 * @LastEditTime: 2021-09-01 13:49:30
 */
import Vue from "vue";
import Antd from 'ant-design-vue' 
// import {Button,Layout,Icon} from 'ant-design-vue'

import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'ant-design-vue/dist/antd.less'
import Authorized from './components/Authorized'
// import Auth from './directives/auth'
Vue.config.productionTip = false;

Vue.use(Antd)
Vue.component('Authorized', Authorized)
// Vue.use(Layout)
// Vue.use(Icon)
// Vue.use(Auth)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
