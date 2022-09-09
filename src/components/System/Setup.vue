/**
  公司管理
*/

<template>
  <div class="container">
    <span>基本设置</span>
    <el-form ref="ruleFormRef" label-position="top" size="default" style="width:840px" :model="ruleForm"
      class="demo-ruleForm" status-icon>
      <el-form-item label="公司缩写">
        <el-input v-model="ruleForm.company_sx" />
      </el-form-item>
      <el-form-item label="公司">
        <el-input v-model="ruleForm.company" />
      </el-form-item>
      <el-form-item label="公司英文名">
        <el-input v-model="ruleForm.en_name" />
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="ruleForm.address" />
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model="ruleForm.contacts" />
      </el-form-item>
      <el-form-item label="邮编">
        <el-input v-model="ruleForm.postcode" />
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="ruleForm.telephone" />
      </el-form-item>
      <el-form-item label="税率">
        <el-input v-model="ruleForm.tax_rate" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const ruleFormRef = ref()
const ruleForm = reactive({
  company_sx: '缤力科技',
  company: '福建缤力精密科技有限公司',
  en_name: 'FUJIAN BATTLOCK PRECISION TECHNOLOGY CO., LTD.',
  address: '福建省厦门市海沧区囷瑶路80-2号102厂房',
  contacts: '黄国贵',
  postcode: '351166',
  telephone: '18750273010',
  tax_rate: 13,
})



</script>

<style lang="scss" scoped>
.container {
  width: calc(100vw - 80px);
  height: calc(100vh - 70px);
  margin: 10px;
  padding: 20px;
  background-color: #fff;
}
</style>