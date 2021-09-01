<!--
 * @Description: 右侧设置抽屉
 * @Author: Jamboy
 * @Date: 2021-08-31 17:42:04
 * @LastEditTime: 2021-09-01 09:41:33
-->

<template>
  <div>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
      width="300px"
    >
    <template v-slot:handle>
      <div class="btn" @click="showDrawer" >
        <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
      </div>
    </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>
<script>
export default {
  name: "SettingDrawer",
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    afterVisibleChange(val) {
      console.log('visible', val)
    },
    showDrawer() {
      this.visible = !this.visible
    },
    onClose() {
      this.visible = false
    },
  },
}
</script>
<style scoped>
.btn {
  position: absolute;
  top: 260px;
  right: 300px;
  height: 44px;
  width: 44px;
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  line-height: 44px;
  background: #1890ff;
  border-radius: 4px 0 0 4px;
}
</style> 
