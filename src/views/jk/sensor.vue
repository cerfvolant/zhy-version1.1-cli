<template>
  <div id="sensor">
    <el-row :gutter="20">
      <el-col class="sensor-wrap" id="front-sensor" :span="8">
        <div class="section" v-for="item in frontSec">
          <div class="section-title">
            <i class="el-icon-menu"></i>
            <span>{{item.frontTitle}}</span>
          </div>
          <div class="section-info">
          </div>
        </div>
      </el-col>
      <el-col id="sensor-img" :span="8" style="background-color: #1b1b1b;">
        <svg id="sensor-jigui" class="icon" aria-hidden="true">
          <use xlink:href="#icon-jigui"></use>
        </svg>
        <svg id="sensor-wsd" class="icon" aria-hidden="true">
          <use xlink:href="#icon-wenshidu"></use>
        </svg>
      </el-col>
      <el-col class="sensor-wrap" id="front-sensor" :span="8">
        <div class="section" v-for="item in backSec">
          <div class="section-title">
            <i class="el-icon-menu"></i>
            <span>{{item.backTitle}}</span>
          </div>
          <div class="section-info">
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name: 'sensor',
    data() {
        return {
          frontSec: [
            {
              frontTitle: '前上温湿度'
            },
            {
              frontTitle: '前中温湿度'
            },
            {
              frontTitle: '前下温湿度'
            }
          ],
          backSec: [
            {
              backTitle: '后上温湿度'
            },
            {
              backTitle: '后中温湿度'
            },
            {
              backTitle: '后下温湿度'
            }
          ]
        }
    }
}
</script>

<style lang="scss"></style>
