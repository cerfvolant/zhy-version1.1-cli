<template>
  <div id="navHeader">
    <el-row class="nav clearfix">
      <!--导航左：logo-->
      <el-col class="nav-left" :span="7">
        <img src="../../assets/static/img/zhy-logo.png" alt="">
        <span class="nav-left-name">中国海洋石油</span>
        <span class="nav-left-info">海上环境监控综合系统</span>
      </el-col>
      <!--导航右：功能块-->
      <el-col class="nav-tab" :span="9">
        <div @click="isNavTabActive(index)" class="tab-item clearfix" v-for="(item,index) in navTab" :key="item.object">
          <!--<i class="tip-icon" :class="item.tabIcon"></i>-->
          <!--<svg class="icon" aria-hidden="true">-->
            <!--<use xlink:href="#icon-PDU"></use>-->
          <!--</svg>-->
          <span>{{item.tabName}}</span>
        </div>
        <el-badge class="tab-warning" :value="200" :max="99">
          <i class="iconfont icon-tongzhi"></i>
        </el-badge>
        <el-dropdown>
          <span class="el-dropdown-link userinfo">{{sysUserName}}<img class="user-avatar" src="../../assets/static/img/user-avatar.jpg" alt=""><i class="el-icon-caret-bottom"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logoutFun">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'navHeader',
    data () {
      return {
        navTab: [
          {
            tabIcon: 'iconfont icon-home',
            tabName: '首页',
            navPage: 'home'
          },
          {
            tabIcon: 'iconfont icon-jiankong',
            tabName: '监控',
            navPage: 'jk'
          },
          {
            tabIcon: 'iconfont icon-xitong',
            tabName: '系统管理',
            navPage: ''
          }
        ],
        sysUserName: '123',
      }
    },
    methods: {
      isNavTabActive (key) {
        this.$router.push({
          name: this.navTab[key].navPage
        })
        console.log(123)
      }
    }
  }
</script>

<style lang="scss">
  @mixin flex-vertical {
    height: 100%;
    display: inline-flex;
    align-items: center;
  }
  .nav {
    background-color: #313131;
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    .nav-left {
      @include flex-vertical;
      justify-content: space-around;
      >img {
        width: 30px;
        height: 30px;
        /*padding: 0 10px;*/
      }
      .nav-left-name {
        font-size: 18px;
        font-weight: 800;
      }
      .nav-left-info {
        font-size: 14px;
        font-weight: 100;
      }
    }
    .nav-tab {
      @include flex-vertical;
      justify-content: space-around;
      float: right;
      .tab-item {
        font-size: 14px;
        cursor: pointer;
        /*color: #00ffff;*/
        .tip-icon {
          font-size: 18px;
        }
      }
      .tab-warning {
        cursor: pointer;
        i{
          font-size: 18px;
        }
        .el-badge__content {
          height: 14px;
          line-height: 14px;
          border: none;
          background-color: #ff0048;
        }
      }
      .userinfo {
        @include flex-vertical;
        cursor: pointer;
        color: #fff;
        .user-avatar {
          border-radius: 10px;
          height: 30px;
          width: 30px;
          margin: 0 10px;
        }
      }
    }
  }
</style>
