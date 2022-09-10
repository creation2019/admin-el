<template>
  <div class="layout-header">
    <div class="header-top">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <svg-icon name="app-agile-fill" style="font-size: 18px;" />
        </el-breadcrumb-item>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-button">
      工作台
    </div>
  </div>
  <div class="layout-container">
    <div class="container-left">
    </div>
    <div class="container-right">
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.layout-header {
  background: #fbfbfb;

  .header-top {
    height: 50px;
    display: flex;
    padding-left: 15px;
    border-bottom: 2px solid #eee;

    .el-breadcrumb {
      display: flex;
    }

    .breadcrumb {
      display: flex;
      padding-left: 10px;
      align-items: center;
    }
  }

  .header-button {
    display: flex;
    height: 45px;
    align-items: center;
    padding-left: 15px;
    background-color: #fbfbfb;
    color: #888;
  }
}

.layout-container {
  display: flex;
  margin: 10px;
  background-color: #eee;
  height: calc(100vh - 115px);

  .container-left {
    background-color: #fbfbfb;
    width: 800px;
    margin-right: 10px;
  }

  .container-right {
    background-color: #fbfbfb;
    flex: 1;
  }
}
</style>