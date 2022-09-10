<template>
  <div class="bulletin-container">
    <div class="bulletin-container-inner">
      <el-row :gutter="10">
        <el-col :span="16">
          <div class="distribution-type dashboard-girdster-item">1</div>
        </el-col>
        <el-col :span="8">
          <div class="distribution-progress dashboard-girdster-item">2</div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="10">
          <div class="project-status dashboard-girdster-item">3</div>
        </el-col>
        <el-col :span="14">
          <div class="Demand-proofing dashboard-girdster-item">4</div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="10">
          <div class="project-exception dashboard-girdster-item">5</div>
        </el-col>
        <el-col :span="14">
          <div class="Demand-vitality-trend dashboard-girdster-item">6</div>
        </el-col>
      </el-row>




    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.bulletin-container {
  height: calc(100vh - 52px);
  padding: 10px;
  overflow: auto;

  .bulletin-container-inner {

    .dashboard-girdster-item {
      height: 373px;
      margin-bottom: 10px;
      background-color: #fff;
    }
  }
}
</style>