<template>
  <div class="basic-layout">
    <div class="nav-side">
      <!-- 系统LOGO -->
      <div class="logos">
        <img :src="logo" alt="" />
      </div>
      <el-menu router :default-active="meunlis.activeMenu" @select="select()" background-color="#48525c"
        class="nav-menu" collapse>
        <el-menu-item index="workbench">
          <svg-icon name="Console" style="font-size: 18px;" />
          <template #title>工作台</template>
        </el-menu-item>
        <el-menu-item index="9">
          <svg-icon name="产品" style="font-size: 18px;" />
          <template #title>产品管理</template>
        </el-menu-item>
        <el-menu-item index="project">
          <svg-icon name="项目" style="font-size: 18px" />
          <template #title>项目管理</template>
        </el-menu-item>
        <el-menu-item index="test">
          <svg-icon name="测试" style="font-size: 18px" />
          <template #title>测试管理</template>
        </el-menu-item>
        <el-menu-item index="4">
          <svg-icon name="销售" style="font-size: 18px" />
          <template #title>销售管理</template>
        </el-menu-item>
        <el-menu-item index="5">
          <svg-icon name="库存" style="font-size: 18px" />
          <template #title>库存管理</template>
        </el-menu-item>
        <el-menu-item index="3">
          <svg-icon name="财务" style="font-size: 18px" />
          <template #title>财务管理</template>
        </el-menu-item>
        <div style="height:200px"></div>
        <el-menu-item index="aa">
          <svg-icon name="知识库" style="font-size: 18px" />
          <template #title>知识</template>
        </el-menu-item>
        <el-menu-item index="8">
          <svg-icon name="模块" style="font-size: 18px" />
          <template #title>模块</template>
        </el-menu-item>
        <el-menu-item index="System">
          <svg-icon name="系统" style="font-size: 18px" />
          <template #title>系统</template>
        </el-menu-item>
        <el-menu-item index="xx">
          <svg-icon name="帮助" style="font-size: 18px" />
          <template #title>帮助</template>
        </el-menu-item>
      </el-menu>
      <div class="sider-button">
        <el-avatar style="background-color:#FB7FBC;font-size: 12px; " @click="handleClick"> {{user.name}} </el-avatar>
      </div>
      <div class="sider-user" v-if="useeinfo">
        <div class="userinfo-top">
          <el-avatar style="background-color:#FB7FBC; font-size: 12px;">{{user.name}}</el-avatar>
          <div class=" userinfo-right">
            <span>{{user.name}}</span>
            <span style="color: #666;">{{user.phone}}</span>
          </div>
        </div>
        <div style="height:1px ; background-color: #eee; margin: 5px 0;" />
        <div class="userinfos">
          <svg-icon name="设置" style="font-size: 20px; margin-right: 10px;" /><span>账号设置</span>
        </div>
        <div style="height:1px ; background-color: #eee; margin: 5px 0;" />
        <div class="userinfos" @click="LogOut">
          <svg-icon name="退出" style="font-size: 20px; margin-right: 10px;" /><span style="color:#ff7575 ;">退出登录</span>
        </div>
      </div>
    </div>
    <div class="content-right">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import logo from 'assets/images/logo-2.png'
import { reactive, ref, getCurrentInstance, } from 'vue'
import { ElMessage } from 'element-plus'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/userinfo'
const { proxy } = getCurrentInstance()

const userstor = useUserStore()
const { user } = storeToRefs(userstor)

let useeinfo = ref(false)

const handleClick = () => {
  useeinfo.value = !useeinfo.value
}
const meunlis = reactive({
  activeMenu: 'aa'
})
// 退出
const LogOut = () => {
  localStorage.clear()
  userstor.user = {}
  proxy.$router.push('/login')
}
const select = (index) => {
  meunlis.activeMenu = index
}




// console.log(meunlis.activeMenu)

</script>

<style lang="scss" >
.basic-layout {
  position: relative;

  .nav-side {
    position: fixed;
    width: 60px;
    height: 100vh;
    background-color: #48525c;
    color: #fff;
    overflow-y: visible;
    transition: width 0.5s;
    margin: 0;
    top: 0;

    .logos {
      display: flex;
      align-items: center;
      font-size: 18px;
      height: 50px;

      img {
        margin: 0 16px;
        width: 32px;
        height: 32px;
      }
    }

    .sider-button {
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: center;
      bottom: 0;
      padding-bottom: 20px;
    }

    .sider-user {
      width: 250px;
      height: 184px;
      padding: 10px 20px;
      position: absolute;
      color: #000;
      left: 60px;
      bottom: 20px;
      box-shadow: 0px 3px 7px 5px rgb(0 0 0 / 0.24);
      background-color: #fff;

      .userinfo-top {
        padding: 9px 0;
        display: flex;

        .userinfo-right {
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;


        }
      }

      .userinfos {
        padding: 9px 0;
        display: flex;
        align-items: center;
        color: #666;
      }
    }

    .nav-menu {
      border-right: none;
      width: 60px !important;
    }

  }

  .content-right {
    background: #eeeeee;
    margin-left: 60px;
  }

}
</style>