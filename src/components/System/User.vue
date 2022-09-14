/**
  用户管理
*/
<template>
  <div>
    <div class="header-button">
      <el-input v-model="input" style="max-width:200px; border-radius: none;" placeholder="Please input" clearable />
      <el-button type="primary" @click="dialogFormVisible = true">
        <el-icon class="el-icon--right">
          <Upload />
        </el-icon>添加新成员
      </el-button>
    </div>
    <div class="content">
      <div class="Sidef">
        <div class="side-header">
          <div class="header-left">组织架构</div>
          <div class="header-right">
            <svg-icon class="svg-icon--right" name="加号1" @click="dialogVisible = true" style="font-size: 26px;" />
            <!-- <svg-icon name="箭头_上一页" style="font-size: 26px;" @click="hiddenisshow" /> -->
          </div>
        </div>
        <div class="side-content">
          <el-tree :data="datad.data" :props="defaultProps" @node-click="handleNodeClick">
            <template #default="{ node, data }">
              <span class="custom-tree-node">
                <span>
                  <svg-icon name="部门详情 (1)" style="font-size: 18px" />
                  {{node.label }}({{data.count}}人)
                </span>
                <span class="tree-node" @click.self.stop="Operation">
                  <el-popover v-model:visible="visible" placement="top" :show-arrow="false" :width="160">
                    <div style="text-align: left; margin: 0">
                      <div @click="Position(data)">
                        <svg-icon class="svg-icon--right" name="加号1" style="font-size: 26px;" /> 新建
                      </div>
                      <div @click="EditSection(data)">
                        <svg-icon class="svg-icon--right" name="加号1" style="font-size: 26px;" /> 编辑
                      </div>
                      <div @click="DeleteSection(data)">
                        <svg-icon class="svg-icon--right" name="加号1" style="font-size: 26px;" />删除
                      </div>
                    </div>
                    <template #reference>
                      <span @click.self.stop="visible = true"> ....</span>
                    </template>
                  </el-popover>
                </span>
              </span>
            </template>
          </el-tree>
        </div>
      </div>
      <div class="table-container">
        <el-table :data="tableData" :border="true">
          <el-table-column fixed type="index" />
          <el-table-column fixed prop="name" label="姓名" width="120" />
          <el-table-column prop="name" label="用户名" width="120" />
          <el-table-column prop="phoone" label="手机号" width="150" />
          <el-table-column prop="address" label="邮箱" />
          <el-table-column prop="address" label="部门" />
          <el-table-column prop="address" label="职位" />
          <el-table-column prop="date" label="创建时间" width="200" />
          <el-table-column prop="date" label="最后登录时间" width="200" />
          <el-table-column fixed="right" label="状态" width="120">
            <el-button type="danger" round>Danger</el-button>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog v-model="dialogVisible" title="新建部门" width="660px">
      <div class="dialog-content">
        <div class="position">
          <el-form :model="form" label-position="top">
            <el-form-item label="部门名称" style="width:100%;">
              <el-input v-model="form.section_name" autocomplete="off" />
            </el-form-item>
          </el-form>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="CreateDepartment">确定</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="newPosition" title="新建职位" width="660px">
      <div class="dialog-content">
        <div class="position">
          <el-form :model="form" label-position="top">
            <el-form-item label="职位名称" style="width:100%;">
              <el-input v-model="form.section_name" autocomplete="off" />
            </el-form-item>
          </el-form>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="newPosition = false">取消</el-button>
          <el-button type="primary" @click="NewPosition">确定</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="editingeDpartment" title="编辑部门" width="660px">
      <div class="dialog-content">
        <div class="position">
          <el-form :model="form" label-position="top">
            <el-form-item label="部门名称" style="width:100%;">
              <el-input v-model="form.section_name" autocomplete="off" />
            </el-form-item>
          </el-form>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="editingeDpartment = false">取消</el-button>
          <el-button type="primary" @click="Editingedpartment">确定</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="deleteSection" width="660px" center :show-close="false">
      <span>It should be not center bydefault</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="deleteSection = false">取消</el-button>
          <el-button type="primary" @click="DeleteSections">确定</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="dialogFormVisible" title="添加成员" width="800px">
      <div class="dialog-content">
        <div class="dialog-tile">
          图标 添加成员账号,成员通过用户名和初始密码登录系统
        </div>
        <el-form :model="form" label-position="top">
          <el-form-item label="姓名">
            <el-input v-model=" form.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="登录用户名">
            <el-input v-model=" form.account" autocomplete="off" />
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model=" form.phone" autocomplete="off" />
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model=" form.email" autocomplete="off" />
          </el-form-item>
          <el-form-item label="初始密码">
            <el-input v-model=" form.password" autocomplete="off" />
          </el-form-item>
          <el-form-item label="权限">
            <el-select v-model="form.role_id" placeholder="Please select a zone">
              <el-option label="Zone No.1" value="shanghai" />
              <el-option label="Zone No.2" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="所属部门">
            <el-select v-model="form.region" placeholder="Please select a zone">
              <el-option label="Zone No.1" value="shanghai" />
              <el-option label="Zone No.2" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="职位">
            <el-select v-model="form.region" placeholder="Please select a zone">
              <el-option label="Zone No.1" value="shanghai" />
              <el-option label="Zone No.2" value="beijing" />
            </el-select>
          </el-form-item>
        </el-form>
      </div>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>

import api from '@/api'
import { reactive, ref, onMounted, getCurrentInstance } from 'vue'
import { ElMessage } from 'element-plus'
const { proxy } = getCurrentInstance()
const input = ref('')
const newPosition = ref(false)
const editingeDpartment = ref(false)
const dialogFormVisible = ref(false)
const deleteSection = ref(false)
let datad = reactive({
  data: []
}
)


const form = reactive({
  name: '',
  account: '',
  phone: '',
  email: '',
  password: '',
  role_id: '',
  section_name: '',
  section_id: 0,
  office_name: '',
  office_id: ''
})

const dialogVisible = ref(false)
const defaultProps = {
  children: 'child',
  label: 'section_name',
}
const visible = ref(false)
const Operation = () => {
  console.log(22)
}

onMounted(() => {
  userdata()
})
const userdata = () => {
  api.getUserList().then(res => {
    datad.data = res.sectionList
  })
}



const data = []
const value = ref('')
for (let i = 0; i < 15; i++) {
  data.push({
    key: i,
    name: ` `,
    age: i,
    address: ` `,
  })
}

// 创建部门
const CreateDepartment = () => {
  const params = { section_name: form.section_name }
  proxy.$api.addDepartment(params).then((res) => {
    if (res.status_code == 200) {
      ElMessage({
        message: res.message,
        type: 'success',
      })
      dialogVisible.value = false
      form.section_name = ''
      userdata()
    } else {
      form.section_name = ''
      ElMessage.error(res.message)
    }
  })
}

//编辑部门
const EditSection = (data) => {
  form.section_name = data.section_name
  editingeDpartment.value = true
  form.section_id = data.id
}
const Editingedpartment = () => {
  const params = { section_name: form.section_name }
  const section_id = form.section_id

  proxy.$api.EditingeDpartment(params, section_id).then((res) => {
    if (res.status_code == 200) {
      ElMessage({
        message: `编辑${res.message}`,
        type: 'success',
      })
      EditingeDpartment.value = false
      userdata()
    } else {
      ElMessage.error(res.message)
    }

  })
}
//删除部门
const DeleteSection = (data) => {
  deleteSection.value = true
  form.section_id = data.id
}
const DeleteSections = () => {
  const section_id = form.section_id
  proxy.$api.DeleteSectionend(section_id).then((res) => {
    if (res.status_code == 200) {
      ElMessage({
        message: `删除${res.message}`,
        type: 'success',
      })
      deleteSection.value = false
      userdata()
    } else {
      ElMessage.error(res.message)
    }

  })
}
// 新建职位
const Position = (data) => {
  form.office_name = data.section_name
  form.section_id = data.id
  newPosition.value = true
}
const NewPosition = () => {
  const params = { office_name: form.office_name, section_id: form.section_id }
  proxy.$api.CreatePosition(params).then((res) => {
    if (res.status_code == 200) {
      ElMessage({
        message: `添加${res.message}`,
        type: 'success',
      })
      newPosition.value = false
      userdata()
    } else {
      ElMessage.error(res.message)
    }

  })

}


</script>

<style lang="scss" scoped>
.header-button {
  display: flex;
  padding: 0 10px;
  height: 45px;
  background-color: #fbfbfb;
  align-items: center;
  justify-content: space-between;
}

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;

  &:hover .tree-node {
    display: block;
  }

  .tree-node {
    display: none;
  }
}

.content {
  display: flex;



  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }

  .Sidef {
    height: calc(100vh - 115px);
    width: 300px;
    min-width: 300px;
    margin: 10px;
    background-color: #fff;
    padding: 15px 20px;

    .side-header {
      display: flex;
      height: 52px;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
    }

  }

  .table-container {
    width: calc(100vw - 380px);
    height: calc(100vh - 115px);
    min-width: 800px;
    background-color: #fff;
    margin: 10px 10px 10px 0;
  }
}

.dialog-tile {
  border: 1px solid #eee;
  border-radius: 2%;
  height: 44px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-left: 2px solid rgb(76, 141, 226);


}

.dialog-content {
  padding: 20px;
}

.el-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;

  .el-form-item {
    width: 355px;
  }

  .el-select {
    width: 355px
  }
}

.position {
  padding: 20px;
}
</style>