<template>
  <el-form label-position="top" size="large" :model="formLabelAlign">
    <el-form-item label="账号" size="large">
      <el-input v-model="formLabelAlign.name" placeholder="请输入手机号/邮箱" />
    </el-form-item>
    <el-form-item label="登录密码">
      <el-input v-model="formLabelAlign.region" show-password placeholder="请输入登录密码" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="large" style="width: 100%;">Primary</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const labelPosition = ref('right')

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})

</script>

<style lang="scss" scoped>
.ant-input {
  height: 48px;

}
</style>