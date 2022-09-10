<template>
  <div class="layout-header">
    <div class="header-top">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <svg-icon name="app-agile-fill" style="font-size: 18px;" />
        </el-breadcrumb-item>
        <el-breadcrumb-item>项目</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="breadcrumb-right">
        <ul class="list-inline">
          <li v-for="(item,index) in data" :key="item.name" @click="selectactive(item,index)"
            :class="item.off ? 'active' : ''">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
  <divt class="layout-content">
    <keep-alive>
      <component :is="current.comName" />
    </keep-alive>
  </divt>
</template>

<script setup>
import { reactive, markRaw } from 'vue'
import Bulletin from './Bulletin.vue'
import Filter from './Filter.vue'
import Project from './Project.vue'
import ProjectSet from './ProjectSet.vue'
const data = reactive([
  {
    name: '项目',
    comName: markRaw(Project),
    off: true
  },
  {
    name: '项目集',
    comName: markRaw(ProjectSet),
    off: false

  },
  {
    name: '筛选器',
    comName: markRaw(Filter),
    off: false
  },
  {
    name: '看板',
    comName: markRaw(Bulletin),
    off: false
  },
])
// 设置默认选中
let current = reactive({
  comName: data[0].comName,
  showactive: false
})

// 点击切换事件
const selectactive = (item, index) => {
  current.comName = item.comName
  data.forEach((i, s) => {
    i.off = false
    if (s == index) {
      i.off = true
    }
  })
}
</script>

<style lang="scss" scoped>
.layout-header {
  width: calc(100vw - 60px);
  background-color: #fbfbfb;
  padding-left: 15px;
  border-bottom: 2px solid #eee;
  // position: fixed;
  // top: 0;


  .header-top {
    height: 50px;
    display: flex;

    .el-breadcrumb {
      display: flex;
      align-items: center;
    }

    .breadcrumb-right {
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }


}

.layout-content {
  overflow: hidden;
}
</style>