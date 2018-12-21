<template>
  <div id="detactor">
    <el-col class="section" id="detactor-section">
      <div class="section-title">
        <i class="el-icon-menu"></i>
        <span>烟雾情况</span>
      </div>
      <div class="section-info detactor-info">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yangan"></use>
        </svg>
        <!--<img class="detactor-img" src="../../assets/static/img/user-avatar.jpg" alt="">-->
        <img class="detactor-icon" src="../../assets/static/img/user-avatar.jpg" alt="">
        <h1 class="detactor-status">正常</h1>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
    name: 'detactor',
    data() {
        return {}
    }
}
</script>

<style lang="scss"></style>
