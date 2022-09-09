<template>
  <div class="basic-layout">
    <div class="nav-side">
      <!-- 系统LOGO -->
      <div class="logos">
        <img :src="logo" alt="" />
      </div>
      <el-menu router :default-active="meunlis.activeMenu" background-color="#48525c" class="nav-menu" collapse>
        <el-menu-item index="workbench">
          <svg-icon name="Console" style="font-size: 18px" />
          <template #title>工作台</template>
        </el-menu-item>
        <el-menu-item index="9">
          <svg-icon name="产品" style="font-size: 18px" />
          <template #title>产品管理</template>
        </el-menu-item>
        <el-menu-item index="project">
          <svg-icon name="项目" style="font-size: 18px" />
          <template #title>项目管理</template>
        </el-menu-item>
        <el-menu-item index="6">
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
        <el-menu-item index="7">
          <svg-icon name="知识库" style="font-size: 18px" />
          <template #title>知识</template>
        </el-menu-item>
        <el-menu-item index="8">
          <svg-icon name="模块" style="font-size: 18px" />
          <template #title>模块</template>
        </el-menu-item>
        <el-menu-item index="/system">
          <svg-icon name="系统" style="font-size: 18px" />
          <template #title>系统</template>
        </el-menu-item>
        <el-menu-item index="8">
          <svg-icon name="帮助" style="font-size: 18px" />
          <template #title>帮助</template>
        </el-menu-item>
      </el-menu>
      <div class="sider-button" @click="handleUser">
        <el-avatar> user </el-avatar>
        <div v-show="onuser" class="userinfo demo-shadow-text">
          <div class="userinfo-top">
            <el-avatar> user </el-avatar>
            <div class="userinfo-right">
              <span>周癸</span>
              <span style="color: #eee;">18951005670</span>
            </div>
          </div>
          <div />
          <div class="userinfos">
            <svg-icon name="设置" style="font-size: 20px;" /><span class="zh">账号设置</span>
          </div>
          <div />
          <div class="userinfos" @click="LogOut">
            <svg-icon name="退出" style="font-size: 20px; " /><span class="tc">退出登录</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-right">
      <div class="wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup>
import logo from 'assets/images/logo-2.png'
import { reactive, ref, getCurrentInstance, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
const { proxy } = getCurrentInstance()
const onuser = ref(false)
const handleUser = () => {
  onuser.value = !onuser.value
}
const meunlis = reactive({
  activeMenu: location.hash.slice(2)
})
const LogOut = () => {
  proxy.$api.signOut().then(res => {
    ElMessage.error(res)
    proxy.$router.push('/login')
  })

}

// onMounted(() => {
//   userInfo()
// })


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

      .userinfo {
        position: absolute;
        width: 250px;
        height: 184px;
        background: #fff;
        color: #000;
        padding: 10px 20px;
        top: -135px;
        left: 60px;
        z-index: 9999999 !important;

        .userinfo-top {
          display: flex;
          align-items: center;
          padding: 20px 0;

          .userinfo-right {
            display: flex;
            flex-direction: column;
            margin-left: 10px;
          }
        }

        .userinfos {
          padding: 10px 0;
          display: flex;
          align-items: center;


          .zh {
            padding-left: 10px;
          }

          .tc {
            padding-left: 10px;
            color: #f67a78;
          }
        }
      }
    }

    .nav-menu {
      border-right: none;
      width: 60px !important;

    }

  }

  .content-right {


    .wrapper {
      width: calc(100vw - 60px);
      height: 100vh;
      background: #eef0f3;
      margin-left: 60px;

      .main-page {
        background: #fff;
        height: 100%;
      }
    }
  }

}
</style>