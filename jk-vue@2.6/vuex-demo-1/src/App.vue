<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-08-30 09:30:55
 * @LastEditTime: 2021-08-30 10:42:25
-->
<template>
  <div id="app">
    {{ count }}
    <br/>
    {{$store.getters.doubleCount}}
    <button @click="increment(3)">=+</button>
    <button @click="asyncIncrement">=+</button>
  </div>
</template>

<script>
 
export default {
  name: 'App',
  computed: {
    count() {
      return this.$store.state.count
    }
  },

  methods: {
    increment(n) {
      this.$store.commit('increment', n)
    },
    asyncIncrement() {
      this.$store.dispatch('increment')
    }
  }

}
</script>

<style>
</style>
