<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-08-31 14:00:13
 * @LastEditTime: 2021-09-01 11:42:45
-->
<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible :trigger="null">
      <SideMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="collapsed = !collapsed"
        ></a-icon>
        <Header />
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
        <Footer />
        <Authorized :authority="['admin']">
          <SettingDrawer />
        </Authorized>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import Header from './Header.vue'
import SideMenu from './SideMenu.vue'
import Footer from './Footer.vue'
import SettingDrawer from '../components/SettingDrawer/index'
import Authorized from '../components/Authorized.vue'

export default {
  components: {
    Header,
    SideMenu,
    Footer,
    SettingDrawer,
    Authorized
  },
  data() {
    return {
      collapsed: false,
    }
  }
}
</script>
<style  scoped>
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}
.trigger:hover {
  background: #eeeeee;
}
</style>