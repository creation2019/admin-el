<template>
  <div class="layout-header">
    <div class="header-top">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="breadcrumb-right">
        <ul class="list-inline">
          <li v-for="(item,index) in data" :key="item.name" @click="selectactive(item,index)"
            :class="item.off ? 'active' : ''">
            {{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
  <a-layout-content class="layout-content">
    <keep-alive>
      <component :is="current.comName" />
    </keep-alive>
  </a-layout-content>
</template>

<script setup>
import { reactive, markRaw } from 'vue'
import Authority from 'components/System/Authority.vue'
import Customer from 'components/System/Customer.vue'
import Demand from 'components/System/Demand.vue'
import Setup from 'components/System/Setup.vue'
import Supply from 'components/System/Supply.vue'
import User from 'components/System/User.vue'


const data = reactive([
  {
    name: '用户管理',
    comName: markRaw(User),
    off: false
  },
  {
    name: '类型需求',
    comName: markRaw(Demand),
    off: false
  },
  {
    name: '客户管理',
    comName: markRaw(Customer),
    off: false
  },
  {
    name: '供应管理',
    comName: markRaw(Supply),
    off: false
  },
  {
    name: '权限管理',
    comName: markRaw(Authority),
    off: false
  },
  {
    name: '公司设置',
    comName: markRaw(Setup),
    off: false
  }
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
  background: #fbfbfb;
  height: 50px;

  .header-top {
    height: 50px;
    display: flex;
    border-bottom: 2px solid #eee;

    .el-breadcrumb {
      padding-left: 10px;
      display: flex;
    }

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

      .active {
        color: #348fe4 !important;
      }

      .active:after {
        content: '';
        position: absolute;
        width: 100px;
        height: 2px;
        background-color: #348fe4;
        bottom: 0;
        left: 10px;
      }

      // .list-inline {
      //   margin: 0;
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;

      //   li {
      //     line-height: 50px;
      //     padding: 0 30px;
      //     position: relative;

      //     &:hover {
      //       color: #348fe4;
      //     }

      //     &:hover::after {
      //       content: '';
      //       position: absolute;
      //       width: 100px;
      //       height: 2px;
      //       background-color: #348fe4;
      //       bottom: 0;
      //       left: 10px;
      //     }
      //   }
      // }
    }
  }


}
</style>