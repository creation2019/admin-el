/**
  权限配置
*/

<template>
  <div class="header">
    <el-button type="primary">
      删除
    </el-button>
    <el-button type="primary" @click="dialogFormVisible = true">
      添加
    </el-button>
  </div>
  <div class="content">
    <div class="table-container">
      <el-table :data="meun.data" border>
        <el-table-column type="index" />
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="url" label="路径" />
        <el-table-column prop="icon" label="图标" />
        <el-table-column prop="display_menu" label="显示" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button type="primary" @click="dialogFormVisible = true">添加菜单</el-button>
            <el-button type="success" @click="EditMenu(scope.row)">编辑菜单</el-button>
            <el-button type="danger" @click="dialogFormVisible = true">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

  <el-dialog v-model="dialogFormVisible" title="权限设置">
    <div class="dialog-content">
      <el-form :model="moueform" label-width="120px">
        <el-form-item label="菜单名称">
          <el-input v-model="moueform.name" />
        </el-form-item>
        <el-form-item label="权限地址">
          <el-input v-model="moueform.url" />
        </el-form-item>
        <el-form-item label="父级菜单">
          <el-select v-model="moueform.parent_id">
            <el-option label="一级菜单" :value=0 />
            <el-option v-for="item in meun.data" :label="item.name" :value="item.id" :key='item.id' />
          </el-select>
        </el-form-item>
        <el-form-item label="是否显示">
          <el-switch v-model="moueform.display_menu" :active-value="1" :inactive-value="0" />
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="Addmenuclick">确定</el-button>
      </span>
    </template>
  </el-dialog>

</template>

<script setup>
import { reactive, ref, getCurrentInstance, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
const { proxy } = getCurrentInstance()
const moueform = reactive({
  name: '',
  url: '',
  parent_id: 0,
  display_menu: 1
})

const meun = reactive({
  data: []
})

const dialogFormVisible = ref(false)
onMounted(() => {
  Meunlsit()
})

// 添加菜单
const Addmenuclick = () => {
  proxy.$api.Addmenu(moueform).then((res) => {
    if (res.status_code == 200) {
      ElMessage({
        message: `添加${res.message}`,
        type: 'success',
      })
      dialogFormVisible.value = false
      Meunlsit()
    } else {
      ElMessage.error(res.message)
    }

  })
}
// 获取菜单
const Meunlsit = () => {
  proxy.$api.Getmeunlist().then((res) => {
    if (res.status_code == 200) {
      // console.log(res)
      meun.data = res.data.data
    } else {
      ElMessage.error(res.message)
    }

  })
}
// 编辑菜单
const EditMenu = (row) => {
  console.log(row)
}

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 0 10px;
  height: 45px;
  background-color: #fbfbfb;
  align-items: center;
  margin-bottom: 8px;
}

.content {
  width: calc(100vw - 90px);
  height: calc(100vh - 115px);
  background-color: #fff;
  margin: 10px;
}

.dialog-content {
  padding: 20px;
}
</style>