<template>
  <div class="layout-header">
    <div class="header-top">
      <a-breadcrumb class="breadcrumb">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>An Application</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="breadcrumb-right">
        <ul class="list-inline">
          <li v-for="item  in data" :key="item.name" @click="selectactive(item)">{{item.name}}</li>
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
import A from '@/components/Project/a.vue'
import B from '@/components/Project/b.vue'
import C from '@/components/Project/c.vue'
const data = reactive([
  {
    name: '我是A组件',
    comName: markRaw(A)
  },
  {
    name: '我是B组件',
    comName: markRaw(B)

  },
  {
    name: '我是C组件',
    comName: markRaw(C)
  },
])
// 设置默认选中
let current = reactive({
  comName: data[0].comName,
  showactive: false
})

// 点击切换事件
const selectactive = (item) => {
  current.comName = item.comName
}
</script>

<style lang="scss" scoped>
.layout-header {
  background: #fff;
  height: 50px;
  padding: 0;

  .header-top {
    height: 50px;
    display: flex;

    .breadcrumb {
      display: flex;
      padding-left: 10px;
      align-items: center;
    }

    .breadcrumb-right {
      width: 100%;
      flex: 1;
      display: flex;
      justify-content: center;

      // .list-inline {
      //   margin: 0;
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;

      //   li {
      //     line-height: 50px;
      //     padding: 0 30px;
      //   }
      // }
    }
  }


}
</style>