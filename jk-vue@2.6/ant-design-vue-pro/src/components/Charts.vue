<!--
 * @Description: 图标
 * @Author: Jamboy
 * @Date: 2021-09-03 15:13:29
 * @LastEditTime: 2021-09-06 09:55:25
-->
<template>
  <div ref="chartDom" style="height: 400px"></div>
</template>
<script>

import * as echarts from "echarts"
import { addListener, removeListener } from "resize-detector"

export default {
  mounted() {
    console.log(echarts)
    // 基于准备好的dom，初始化echarts实例
    this.chart = echarts.init(this.$refs.chartDom)
    
    addListener(this.$refs.chartDom, this.resize)
    // 绘制图表
    this.chart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    })
  },

  beforeDestroy() {
    // 移除防止OOM
    removeListener(this.$refs.chartDom, this.resize)
    this.chart.dispose()
    this.chart = null
  },

  methods: {
    resize() {
      this.chart.resize()
    }
  }
}
</script>
<style >
</style>