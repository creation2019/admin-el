<template>
  <div class="header-button">
    <span style=" line-height: normal;">全部项目</span>
    <a-button type="primary" @click="showModal">Primary Button</a-button>
  </div>
  <a-card title="Card title" :bordered="false" style="margin: 0 8px;">
    <a-row :gutter=" 16">
      <a-col :span="8">
        <a-card :bordered="false" style="background-color: #fafafa">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card :bordered="false" style="background-color: #fafafa">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card :bordered="false" style="background-color: #fafafa">
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
  </a-card>
  <a-card style="background-color: #fff; margin: 8px 8px 8px 8px;">
    <a-input-search v-model:value="value" placeholder="input search text" style="width: 200px" @search="onSearch" />
    <a-table :columns="columns" :data-source="data">
      <template #name="{ text }">
        <a>{{ text }}</a>
      </template>
    </a-table>
  </a-card>
  <a-modal v-model:visible="visible" cancelText="取消" okText="确定" width="1500px" title="Basic Modal" @ok="handleOk">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>

<script setup>
import { ref } from "vue"
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    slots: {
      customRender: 'name',
    },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
]
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]
const value = ref('')
const visible = ref(false)

const showModal = () => {
  visible.value = true
}

const handleOk = e => {
  console.log(e)
  visible.value = false
}
const onSearch = searchValue => {
  console.log('use value', searchValue)
  console.log('or use this.value', value.value)
}
</script>

<style lang="scss" scoped>
.header-button {
  display: flex;
  padding: 0 10px;
  height: 45px;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
</style>