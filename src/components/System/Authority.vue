/**
  权限管理
*/
<template>
  <div class="content">
    <div class="Sidef">
      <div class="side-header">
        <div class="header-left">组织架构</div>
        <div class="header-right">图标</div>
      </div>
      <div class="side-content">
        <el-table :data="tableData" :border="parentBorder" style="width: 100%">
          <el-table-column type="expand">
            <template #default="props">
              <div m="4">
                <p m="t-0 b-2">State: {{ props.row.state }}</p>
                <p m="t-0 b-2">City: {{ props.row.city }}</p>
                <p m="t-0 b-2">Address: {{ props.row.address }}</p>
                <p m="t-0 b-2">Zip: {{ props.row.zip }}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="全部部门（8人）" prop="date" />
        </el-table>
      </div>
    </div>
    <div class="table-container">
      <el-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]"
        :props="defaultProps" />
    </div>
  </div>
</template>

<script setup>

import { reactive, ref } from 'vue'
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
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
        children: [
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
    width: calc(100vw - 380px);
    height: calc(100vh - 115px);
    min-width: 800px;
    background-color: #fff;
    margin: 10px 10px 10px 0;
  }
}
</style>