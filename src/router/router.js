import Vue from 'vue'
import VueRouter from 'vue-router'

//引用组件
import home from '../views/home.vue' //首页
import jk from '../views/jk/jk.vue'  //监控
import sensor from '../views/jk/sensor.vue' //监控：温湿度传感器
import detactor from '../views/jk/detactor.vue' //监控：烟感
import intellPDU from '../views/jk/intellPDU.vue'  //监控：智能PDU
import intellFan from '../views/jk/intellFan.vue'  //监控：智能风扇
import netSwitch from '../views/jk/netSwitch.vue'  //监控：网络交换机
import PBX from '../views/jk/PBX.vue'  //监控：语音交换机
import DVRecorder from '../views/jk/DVRecorder.vue'  //监控：硬盘录像机
import brodSys from '../views/jk/brodSys.vue'  //监控：广播系统
import weather from '../views/jk/weather.vue'  //监控：气象

//告诉vue使用vueRouter
Vue.use(VueRouter);

let routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/',
    component: home,
    redirect: '/home'
  },
  {
    path: '/jk',
    name: 'jk',
    component: jk,
    redirect: '/jk/sensor',
    children: [
      {
        path: '/jk/sensor',
        component: sensor,
        name: '温湿度传感器',
        asideIcon: 'el-icon-menu'
      },
      {
        path: '/jk/detactor',
        component: detactor,
        name: '烟感',
        asideIcon: 'el-icon-menu'
      },
      {
        path: '/jk/intellPDU',
        component: intellPDU,
        name: '智能PDU',
        asideIcon: 'el-icon-menu'
      },
      {
        path: '/jk/intellFan',
        component: intellFan,
        name: '智能风扇',
        asideIcon: ''
      },
      {
        path: '/jk/netSwitch',
        component: netSwitch,
        name: '网络交换机',
        asideIcon: 'el-icon-menu'
      },
      {
        path: 'jk/PBX',
        component: PBX,
        name: '语音交换机',
        asideIcon: 'el-icon-menu'
      },
      {
        path: '/jk/DVRecorder',
        component: DVRecorder,
        name: '硬盘录像机',
        asideIcon: 'el-icon-menu'
      },
      {
        path: '/jk/brodSys',
        component: brodSys,
        name: '广播系统',
        asideIcon: 'el-icon-menu'
      },
      {
        path: '/jk/weather',
        component: weather,
        name: '气象',
        asideIcon: 'el-icon-menu'
      }
    ]
  }
];

let router = new VueRouter({
  routes
});

export default router;
