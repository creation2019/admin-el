<template>
  <el-form label-position="top" size="large" :model="formLabelAlign" style="max-width: 460px">
    <el-form-item label="手机号">
      <el-input v-model="formLabelAlign.name" placeholder="请输入手机号" />
    </el-form-item>
    <el-form-item label="验证码" style="max-width: 180px">
      <el-input v-model="formLabelAlign.region" placeholder="请输入验证码" />
      <div class="form-group"></div>
    </el-form-item>
    <el-form-item label="手机号验证码" class="form-button">
      <el-input v-model="formLabelAlign.region" placeholder="请输入验证码" />
      <el-button type="primary" size="small" class="btn">Previous Page</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" style="width: 100%;">Primary</el-button>
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
.form-group {
  width: 266px;
  height: 50px;
  background-color: aqua;
}

.form-button {
  position: relative;

  .btn {
    position: absolute;
    right: 25px;
    top: 21%;
    border-radius: 8px;
  }
}
</style>