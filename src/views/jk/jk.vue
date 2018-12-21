<template>
  <div id="jk">
    <el-menu class="aside-menu" :default-active="$route.path" router active-text-color="#00ffff" text-color="#ffffff">
      <template v-for="(item,index) in $router.options.routes">
        <el-menu-item class="aside-item clearfix" v-for="child in item.children" :index="child.path" :key="child.path">
          <i :class="child.asideIcon" class="aside-icon"></i>
          <!--<img src="../../assets/static/svg/PDU.svg" alt="">-->
          <!--<div style="background-image: url('../../assets/static/svg/PDU.svg');background-color:red; width: 20px;height: 20px;"></div>-->
          <!--<embed src="../../assets/static/svg/PDU.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" />>-->
          <!--<object data="../../assets/static/svg/PDU.svg" type="image/svg+xml"></object>-->
          <span class="aside-name">{{child.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'jk',
  data () {
    return {}
  }
}
</script>

<style lang="scss"></style>
