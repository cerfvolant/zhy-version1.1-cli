<template>
  <div id="home">
    <el-menu class="aside-menu" default-active="1" active-text-color="#00ffff">
      <el-menu-item class="aside-item" index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">环境概览</span>
      </el-menu-item>
    </el-menu>
    <section class="content">
      <!--1、wet-temperature-sensor-->
      <el-col class="section home-section" :span="7">
        <div class="section-title">
          <i class="el-icon-menu"></i>
          <span>机柜平均温湿度</span>
        </div>
        <div class="section-info">
        </div>
      </el-col>
      <!--2、weather-->
      <el-col class="section home-section" :span="9">
        <div class="section-title">
          <i class="el-icon-menu"></i>
          <span>气象</span>
        </div>
        <div class="section-info">
        </div>
      </el-col>
      <!--3、smoke-detactor-->
      <el-col class="section home-section" :span="7">
        <div class="section-title">
          <i class="el-icon-menu"></i>
          <span>烟感状态</span>
        </div>
        <div class="section-info">
        </div>
      </el-col>
      <!--4、intellPDU-->
      <el-col class="section home-section" :span="10">
        <div class="section-title">
          <i class="el-icon-menu"></i>
          <span>智能PDU</span>
        </div>
        <div class="section-info">
        </div>
      </el-col>
      <!--5、intellFan-->
      <el-col class="section home-section" :span="7">
        <div class="section-title">
          <i class="el-icon-menu"></i>
          <span>智能风扇</span>
        </div>
        <div class="section-info">
        </div>
      </el-col>
      <!--6、warning-->
      <el-col class="section home-section" :span="6">
        <div class="section-title">
          <i class="el-icon-menu"></i>
          <span>历史告警条目</span>
        </div>
        <div class="detail-info">
        </div>
      </el-col>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
</style>
