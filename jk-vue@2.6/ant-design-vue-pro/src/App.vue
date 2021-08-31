<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-08-31 09:28:59
 * @LastEditTime: 2021-08-31 15:14:59
-->
<template>
  <div id="app">
    <a-button>btn</a-button>
    <div id="nav">
      <router-link to="/dashboard/analysis">dashboard</router-link> |
      <router-link to="/form/basic-form">form</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">

</style>
