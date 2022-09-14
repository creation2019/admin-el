/**
  权限管理
*/
<template>
  <div>
    <div class="content">
      <div class="Sidef">
        <div class="side-header">
          <div class="header-left">组织架构</div>
          <div class="header-right">
            <svg-icon name="加号1" @click="dialogVisible = true" style="font-size: 24px;" />
          </div>
        </div>
        <div class="side-content">
          <div v-for="item in role.data" key="item.id">{{item.name}}</div>
        </div>
      </div>
      <div class="table-container">
        <el-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]"
          :props="defaultProps" />
      </div>
    </div>
    <el-dialog v-model="dialogVisible" title="新建权限" width="660px">
      <div class="dialog-content">
        <div class="position">
          <el-form :model="form" label-position="top">
            <el-form-item label="权限" style="width:100%;">
              <el-input v-model="From.name" autocomplete="off" />
            </el-form-item>
          </el-form>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="CreateRoleclick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>

</template>

<script setup>

import { reactive, ref, getCurrentInstance, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
const { proxy } = getCurrentInstance()

const From = reactive({
  name: ''
})
const role = reactive({
  data: []
})

const dialogVisible = ref(false)
// 获取角色列表
onMounted(() => {
  Rolelist()
})
const Rolelist = () => {
  proxy.$api.GetRolelist().then((res) => {
    if (res.status_code == 200) {
      role.data = res.data.data
      console.log(res)
    } else {
      ElMessage.error(res.message)
    }
  })
}


// 新建权限
const CreateRoleclick = () => {
  proxy.$api.CreateRole(From).then((res) => {
    if (res.status_code == 200) {
      ElMessage({
        message: `新建${res.message}`,
        type: 'success',
      })
      dialogVisible.value = false
      From.name = ''
      Rolelist()
    } else {
      ElMessage.error(res.message)
    }

  })

}

const defaultProps = {
  children: 'children',
  label: 'label',
}
const data = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
      },
      {
        id: 9,
        label: 'Level three 1-1-1',
      },
      {
        id: 10,
        label: 'Level three 1-1-2',
      },
      {
        id: 9,
        label: 'Level three 1-1-1',
      },
      {
        id: 10,
        label: 'Level three 1-1-2',
      },
      {
        id: 9,
        label: 'Level three 1-1-1',
      },
      {
        id: 10,
        label: 'Level three 1-1-2',
      },
      {
        id: 9,
        label: 'Level three 1-1-1',
      },
      {
        id: 10,
        label: 'Level three 1-1-2',
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
]



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

.content {
  display: flex;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }

  .Sidef {
    height: calc(100vh - 75px);
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
    flex: 1;
    height: calc(100vh - 75px);
    background-color: #fff;
    margin: 10px;

    .el-tree-node__children {
      display: flex;
      flex-wrap: wrap;
    }

  }
}

.position {
  padding: 20px;
}
</style>