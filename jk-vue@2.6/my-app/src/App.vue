<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-08-27 10:35:28
 * @LastEditTime: 2021-08-27 10:58:13
-->
<template>
  <div id="app">
    <input type="text" v-model="item" />
    <button type="button" @click="handleAdd">添加</button>
    <ul v-for="item in list" :key="item">
      <TodoItem>
        <template v-slot:item>
          <span style="font-size: 20px">{{ item }}</span>
        </template>
      </TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'App',
  components: {
    TodoItem
  },

  data() {
    return {
      item: '',
      list: []
    }
  },
  methods: {
    handleAdd() {
      this.list.push(this.item)
      this.item = ''
    }
  }
}
</script>

<style>
</style>
