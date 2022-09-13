/**
  用户管理
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
    <div class="Sidef">
      <div class="side-header">
        <div class="header-left">组织架构</div>
        <div class="header-right">
          <svg-icon class="svg-icon--right" name="加号1" style="font-size: 26px;" />
          <svg-icon name="箭头_上一页" style="font-size: 26px;" @click="hiddenisshow" />
        </div>
      </div>
      <div class="side-content">
        <el-tree :data="datad.data" :props="defaultProps" @node-click="handleNodeClick">
          <template #default="{ node, data }">
            <span class="custom-tree-node">
              <span>
                <svg-icon name="部门详情 (1)" style="font-size: 18px" />
                {{ node.label }}
              </span>
              <span class="tree-node" @click.self.stop="Operation">
                <el-popover v-model:visible="visible" placement="top" :show-arrow="false" :width="160">
                  <div style="text-align: left; margin: 0">
                    <div @click="dialogVisible = true">
                      <svg-icon class="svg-icon--right" name="加号1" style="font-size: 26px;" /> 新建
                    </div>
                    <div>
                      <svg-icon class="svg-icon--right" name="加号1" style="font-size: 26px;" /> 编辑
                    </div>
                    <div>
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
  <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
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
          <el-input v-model=" form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model=" form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model=" form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="初始密码">
          <el-input v-model=" form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="权限">
          <el-select v-model="form.region" placeholder="Please select a zone">
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
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>

import api from '@/api'
import { reactive, ref } from 'vue'
const input = ref('')
const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
let datad = reactive({
  data: [
    {
      label: '全部部门',
    },
    {
      label: '总经办',
      children: [
        {
          label: '项目总监',
        },
      ],
    },
    {
      label: '商务部',
      children: [
        {
          label: '商务主管',
        },
        {
          label: '商务专员',
        },
      ],
    },
    {
      label: '财务部',
      children: [
        {
          label: '财务主管',
        },
        {
          label: '财务专员',
        },
      ],
    },
    {
      label: '生产部',
      children: [
        {
          label: '厂务主管',
        },
      ],
    },
    {
      label: '品质部',
      children: [
        {
          label: '品质组长',
        },
      ],
    },
    {
      label: '储运部',
    },
  ]
}

)
const handleNodeClick = (data) => {
  console.log(data)
}
const dialogVisible = ref(false)
const defaultProps = {
  children: 'children',
  label: 'label',
}
const visible = ref(false)
const Operation = () => {
  console.log(22)
}
const dd = () => {

}



const userdata = () => {
  api.getUserList({}).then(res => {
    console.log(res)
    datad.data = res.sectionList
  })
}
userdata()

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
</style>