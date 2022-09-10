<template>
  <div class="project-container">
    <div class="header-top">
      <div>全部项目</div>
      <el-button color="#348fe4" @click="FormVisible = true">
        <svg-icon name='add-icon' style="margin-right: 10px;" />新建项目集
      </el-button>
    </div>
    <!-- 新建项目集 -->
    <el-dialog v-model="FormVisible" title="新建项目集" width="800px">
      <div class="dialog-content">
        <el-form label-position="top" :model="form">
          <el-form-item label="标题" style="width:100%">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="所属项目" style="width:100%">
            <el-select v-model="form.name" placeholder="please select your zone" style="width: 100%;">
              <el-option value="shanghai">
                <svg-icon name="hook-icon" style="font-size: 20px;" />
              </el-option>
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <div style="width:100%;display: flex;flex-wrap: wrap;
    justify-content: space-between;">
            <el-form-item label="项目集编码" style="width:48%">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="负责人" style="width:48%">
              <el-select v-model="form.gg" placeholder="please select your zone" style="width: 100%;">
                <el-option value="shanghai">
                  <svg-icon name="hook-icon" style="font-size: 20px;" />
                </el-option>
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="开始时间" style="width:48%">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="截止时间" style="width:48%">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="截止时间" style="width:100%">
              <el-input v-model="textarea" maxlength="30" placeholder="Please input" show-word-limit type="textarea" />
            </el-form-item>
          </div>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="FormVisible = false">取消</el-button>
          <el-button type="primary" @click="FormVisible = false">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>


</template>

<script setup>
import { reactive, ref } from 'vue'
const FormVisible = ref(false)
const form = reactive({
  name: 123,
  gg: ''
})
</script>

<style lang="scss" scoped>
.header-top {
  height: 45px;
  background-color: #fbfbfb;
  padding: 0 15px;
  display: flex;
  color: #888;
  align-items: center;
  justify-content: space-between;
}

.dialog-content {
  padding: 20px 30px 30px;
}
</style>