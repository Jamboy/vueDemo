/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-08-31 09:28:59
 * @LastEditTime: 2021-08-31 17:46:42
 */
import Vue from "vue";
import Antd from 'ant-design-vue' 
// import {Button,Layout,Icon} from 'ant-design-vue'

import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'ant-design-vue/dist/antd.less'

Vue.config.productionTip = false;

Vue.use(Antd)
// Vue.use(Layout)
// Vue.use(Icon)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
