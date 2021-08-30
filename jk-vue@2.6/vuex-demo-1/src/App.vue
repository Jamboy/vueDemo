<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-08-30 09:30:55
 * @LastEditTime: 2021-08-30 09:47:17
-->
<template>
  <div id="app">
    {{count}}
  </div>
</template>

<script>

export default {
  name: 'App',
  computed:{
    count(){
      return this.$store.state.count
    }
  }

}
</script>

<style>
</style>
