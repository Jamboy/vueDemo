<!--
 * @Description: 右侧设置抽屉
 * @Author: Jamboy
 * @Date: 2021-08-31 17:42:04
 * @LastEditTime: 2021-08-31 18:02:42
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
        1ffff
        <div class="btn" @click="showDrawer">
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
      this.visible = true
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
  right: 20px;
  height: 44px;
  width: 44px;
  text-align: center;
  line-height: 44px;
}
</style> 
