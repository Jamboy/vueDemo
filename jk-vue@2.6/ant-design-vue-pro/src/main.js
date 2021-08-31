/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-08-31 09:28:59
 * @LastEditTime: 2021-08-31 15:14:11
 */
import Vue from "vue";
// import Antd from 'ant-design-vue' 
import {Button} from 'ant-design-vue'

import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'ant-design-vue/dist/antd.less'

Vue.config.productionTip = false;

Vue.use(Button)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
