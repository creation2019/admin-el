<template>
  <div class="bulletin-container">
    <div class="bulletin-container-inner">
      <el-row :gutter="10">
        <el-col :span="16">
          <div class="distribution-type dashboard-girdster-item"></div>
        </el-col>
        <el-col :span="8">
          <div class="distribution-progress dashboard-girdster-item"></div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="10">
          <div class="project-status dashboard-girdster-item"></div>
        </el-col>
        <el-col :span="14">
          <div class="Demand-proofing dashboard-girdster-item"></div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="10">
          <div class="project-exception dashboard-girdster-item"></div>
        </el-col>
        <el-col :span="14">
          <div class="Demand-vitality-trend dashboard-girdster-item"></div>
        </el-col>
      </el-row>




    </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted } from "vue"
onMounted(() => {
  initLine(),
    type(),
    status(),
    Demand(),
    exception(),
    vitality()
})
const initLine = () => {
  const charts = echarts.init(document.querySelector('.distribution-progress'))
  charts.setOption({
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  })
}
const type = () => {
  const charts = echarts.init(document.querySelector('.distribution-type'))
  charts.setOption({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  })
}
const status = () => {
  const charts = echarts.init(document.querySelector('.project-status'))
  charts.setOption({
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  })
}
const Demand = () => {
  const charts = echarts.init(document.querySelector('.Demand-proofing'))
  charts.setOption({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  })
}
const exception = () => {
  const charts = echarts.init(document.querySelector('.project-exception'))
  charts.setOption({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  })
}
const vitality = () => {
  const charts = echarts.init(document.querySelector('.Demand-vitality-trend'))
  charts.setOption({
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.bulletin-container {
  height: calc(100vh - 52px);
  padding: 10px;
  overflow: auto;

  .bulletin-container-inner {

    .dashboard-girdster-item {
      height: 373px;
      margin-bottom: 10px;
      background-color: #fff;
    }
  }
}
</style>