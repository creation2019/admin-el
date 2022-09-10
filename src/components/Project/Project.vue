<template>
  <div class="project-container">
    <div class="header-top">
      <div>全部项目</div>
      <el-button color="#348fe4" @click="FormVisible = true">
        <svg-icon name='add-icon' style="margin-right: 10px;" />新建项目
      </el-button>
    </div>
    <el-dialog v-model="FormVisible" title="新建项目" width="980px" style="max-height: 740px;">
      <div class="dialog-content">
        <div class="dialog-content-left">
          <div class="template-img">
            <img src="./../../assets/images/intro-scrum-p.svg" alt="">
          </div>
          <div class="template-content">
            <p class="template-name">Scrum</p>
            <div class="template-desc"> Scrum是一种增量迭代式的敏捷开发方法，帮助团队持续规划和交付业务价值。</div>
            <div class="template-tips">
              <div>
                <svg-icon name="hook-icon" style="font-size: 20px;" /> <span>通过Epic/Feature/User Story管理需求</span>
              </div>
              <div>
                <svg-icon name="hook-icon" style="font-size: 20px;" /><span>轻松规划迭代，追踪回顾迭代开发</span>
              </div>
              <div>
                <svg-icon name="hook-icon" style="font-size: 20px;" /><span>从产品角度定义发布版本</span>
              </div>
            </div>
          </div>
        </div>
        <div class="dialog-content-right">
          <el-form label-position="top" :model="formLabelAlign">
            <el-form-item label="项目名称">
              <el-input v-model="formLabelAlign.name" />
            </el-form-item>
            <el-form-item label="客户">
              <el-select v-model="formLabelAlign.dd" placeholder="please select your zone" style="width: 100%;">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="来源">
              <el-input v-model="formLabelAlign.type" />
            </el-form-item>
            <el-form-item label="优先级别">
              <el-select v-model="formLabelAlign.dd" placeholder="please select your zone" style="width: 100%;">
                <el-option value="shanghai">
                  <svg-icon name="hook-icon" style="font-size: 20px;" />
                </el-option>
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="项目编号">
              <el-input v-model="formLabelAlign.type" />
            </el-form-item>
            <el-form-item label="描述">
              <el-input v-model="textarea" :rows="2" type="textarea" placeholder="Please input" />
            </el-form-item>
            <el-form-item label="成员">
              <el-avatar :size="size" :src="circleUrl" />
            </el-form-item>
          </el-form>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="FormVisible = false">取消</el-button>
          <el-button type="primary" @click="FormVisible = false">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>

  <!-- 新建项目 -->

</template>

<script setup>
import { reactive, ref } from 'vue'
const FormVisible = ref(false)
const textarea = ref('')
const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
  dd: ''
})
</script>

<style lang="scss" scoped>
.header-top {
  height: 45px;
  background-color: #fbfbfb;
  display: flex;
  color: #888;
  padding: 0 15px;
  align-items: center;
  justify-content: space-between;
}

.dialog-content {
  display: flex;

  .dialog-content-left {
    padding: 20px 30px 30px;
    flex: 1;
    border-right: 1px solid #eee;

    .template-img {
      margin-bottom: 20px;
      padding: 20px;
      text-align: center;
      background: #fafafa;
    }

    .template-content {
      .template-name {
        line-height: 22px;
        margin-bottom: 5px;
        color: #333;
      }

      .template-desc {
        line-height: 22px;
        margin-bottom: 15px;
        color: #888;
      }

      .template-tips {
        color: #888;

        div {
          margin-bottom: 12px;
        }
      }
    }
  }

  .dialog-content-right {
    padding: 20px 30px 30px;
    flex: 1;
    max-height: 630px;
    overflow: auto;
  }
}
</style>