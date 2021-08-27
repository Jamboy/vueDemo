<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-08-27 10:39:33
 * @LastEditTime: 2021-08-27 10:59:29
-->
<template>
  <li>
    <input type="checkbox" v-model="checked" />
    <slot name="item"></slot>
  </li>
</template>
<script>
export default {
  name: 'TodoItem',
  props: ['info'],
  data() {
    return {
      checked: true
    }
  }
}
</script>
<style lang="scss" scoped>
</style>