/**
  类型需求
*/
<template>
  <div class="header-button">
    <el-input v-model="input" style="max-width:200px; border-radius: none;" placeholder="Please input" clearable />
    <el-button type="primary" @click="dialogFormVisible = true">
      <el-icon class="el-icon--right">
        <Upload />
      </el-icon>添加新成员
    </el-button>
  </div>
  <div class="content">
    <div class="table-container">
      <el-table :data="tableData" border>
        <el-table-column type="index" />
        <el-table-column prop="date" label="需求类型名称" />
        <el-table-column prop="name" label="需求类型描述" />
        <el-table-column prop="address" label="状态" />
      </el-table>
    </div>
  </div>

  <el-dialog v-model="dialogFormVisible" title="Shipping address">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, ref } from 'vue'
const input = ref('')
const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
</script>

<style lang="scss" scoped>
.header-button {
  display: flex;
  padding: 0 10px;
  height: 45px;
  background-color: #fbfbfb;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.content {
  width: calc(100vw - 80px);
  height: calc(100vh - 115px);
  margin: 10px;

}
</style>