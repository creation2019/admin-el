<template>
  <el-form label-position="top" size="large" :model="formAlign">
    <el-form-item label="账号" size="large">
      <el-input v-model="formAlign.account" placeholder="请输入手机号/邮箱" />
    </el-form-item>
    <el-form-item label="登录密码">
      <el-input v-model="formAlign.password" show-password placeholder="请输入登录密码" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="large" style="width: 100%;" @click="onlginger">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, getCurrentInstance } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from "@/store/userinfo.js"
const { proxy } = getCurrentInstance()

const userStore = useUserStore()
const formAlign = reactive({
  account: 'admin',
  password: '1234567890',
})
const onlginger = () => {
  proxy.$api.loginn(formAlign).then((res) => {
    userStore.user = res.data
    ElMessage({
      message: res.message,
      type: 'success',
    })
    proxy.$router.push('/')
  })

}
</script>

<style lang="scss" scoped>
.ant-input {
  height: 48px;

}
</style>