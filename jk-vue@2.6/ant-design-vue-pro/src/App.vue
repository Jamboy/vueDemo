<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-08-31 09:28:59
 * @LastEditTime: 2021-08-31 10:14:19
-->
<template>
  <div id="app">
    <a-button>btn</a-button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">

</style>
