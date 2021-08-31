<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-08-31 14:00:13
 * @LastEditTime: 2021-08-31 15:04:27
-->
<template>
  <div>
    <Header />
    <SideMenu />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Header from './Header.vue'
import SideMenu from './SideMenu.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Header,
    SideMenu,
    Footer,
  }
}
</script>
<style lang="">
</style>