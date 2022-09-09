<template>
  <a-divider style="height: 1px; background-color: #eeeeee;margin: 0;" />
  <div class="header-button">
    <span style=" line-height: normal;">全部项目</span>
    <a-button type="primary">Primary Button</a-button>
  </div>
  <a-card style="background-color: #fff;">
    <a-input-search v-model:value="value" placeholder="input search text" style="width: 200px" @search="onSearch" />
    <a-table :columns="columns" :data-source="data">
      <template #name="{ text }">
        <a>{{ text }}</a>
      </template>
    </a-table>
  </a-card>
</template>

<script setup>
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