<template>
  <div class="layout-header">
    <div class="header-top">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.layout-header {
  background: #fbfbfb;
  height: 50px;

  .header-top {
    height: 50px;
    display: flex;
    border-bottom: 2px solid #eee;

    .el-breadcrumb {
      padding-left: 10px;
      display: flex;
    }

    .breadcrumb {
      display: flex;
      padding-left: 10px;
      align-items: center;
    }
  }


}
</style>