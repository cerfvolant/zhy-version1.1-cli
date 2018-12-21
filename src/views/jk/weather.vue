<template>
  <div id="weather">
    <el-row :gutter="5">
      <el-col :span="11">
        <div class="section" id="weather-prof">
          <div class="section-title">
            <i class="el-icon-menu"></i>
            <span>气象基本参数</span>
          </div>
          <div class="section-info clearfix" id="weather-info">
            <!--<ul>-->
              <!--<li class="clearfix"><span>品牌</span>：<i>美的</i></li>-->
              <!--<li class="clearfix"><span>型号</span>：<i>GY-250</i></li>-->
              <!--<li class="clearfix"><span>序列号</span>：<i>GY-123456</i></li>-->
              <!--<li class="clearfix"><span>安装时间</span>：<i>2018年10月20日</i></li>-->
            <!--</ul>-->
            <ul id="weather-ul2">
              <li class="clearfix" v-for="item in weatherProf2">
                <span>{{item.profItem}}</span>：<i>{{item.profParam}}</i> {{item.unit}}
              </li>
            </ul>
          </div>
        </div>
        <div class="section">
          <div class="section-title">
            <i class="el-icon-menu"></i>
            <span>风向风速</span>
          </div>
          <div class="section-info">
            <div id="campus" :style="{width: '100%',height: '300px'}"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="section">
          <div class="section-title">
            <i class="el-icon-menu"></i>
            <span>时段风速</span>
          </div>
          <div class="section-info">
            <div id="graph" :style="{width: '100%', height: '300px'}"></div>
          </div>
        </div>
        <div class="section">
          <div class="section-title">
            <i class="el-icon-menu"></i>
            <span>时段风速</span>
          </div>
          <div class="section-info">
            <div id="average" :style="{width: '100%', height: '300px'}"></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  let echarts = require('echarts/lib/echarts');
  var colors = ['#5793f3', '#d14a61', '#675bba'];
export default {
  name: 'weather',
  data() {
      return {
        weatherProf2: [
          {
            profItem: '品牌',
            profParam: '美的'
          },
          {
            profItem: '型号',
            profParam: 'GY-250'
          },
          {
            profItem: '序列号',
            profParam: 'GY-123456'
          },
          {
            profItem: '安装时间',
            profParam: '2018年10月20日'
          },
          {
            profItem: 'IP地址',
            profParam: '255.255.255.255'
          },
          {
            profItem: '温度',
            profParam: '20',
            unit: '℃'
          },
          {
            profItem: '湿度',
            profParam: '30',
            unit: '%'
          },
          {
            profItem: '气压(QNH)',
            profParam: '3.0',
            unit: 'Bar'
          },
          {
            profItem: '气压(QFE)',
            profParam: '2.0',
            unit: 'Bar'
          },
          {
            profItem: '电流',
            profParam: '0.6',
            unit: 'A'
          }
        ]
      }
  },
  mounted() {
    this.graphInfo();
    this.campusInfo();
    this.averageInfo();
  },
  methods: {
    graphInfo() {
      let graph = echarts.init(document.getElementById('graph'));
      graph.setOption({
        title: {text: '24小时风速曲线'},
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data:['2015 降水量', '2016 降水量']
        },
        grid: {
          top: 70,
          bottom: 50
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[1]
              }
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return '降水量  ' + params.value
                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                }
              }
            },
            data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[0]
              }
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return '降水量  ' + params.value
                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                }
              }
            },
            data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name:'2015 降水量',
            type:'line',
            xAxisIndex: 1,
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name:'2016 降水量',
            type:'line',
            smooth: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
          }
        ]
      });
    },
    campusInfo() {
      let campus = echarts.init(document.getElementById("campus"));
      var option = {
        title: {
          x: "center",
          top: 0,
          text: '风速/风向模拟',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: "#333"
          }
        },
        tooltip: {
          show: true,
          backgroundColor: '#fff',
          borderColor: '#f60',
          borderWidth: '1px',
          textStyle: {
            color: '#333'
          },
          formatter: function(param) {
            if(param.seriesIndex == 2){
              return '<em style="color:' + param.color + ';">当前风向:' + param.value + '</em> °'
            }
            if(param.seriesIndex == 3){
              return '<em style="color:' + param.color + ';">当前风速:' + param.value + '</em> m/s'
            }
          }
        },
        series: [
          {
            name: '',
            type: 'gauge',
            radius: '83%',
            min: 0,
            max: 360,
            startAngle: 90,
            endAngle: 449.9,
            splitNumber: 0,
            axisLine: {
              lineStyle: {
                color: [
                  [0.5, '#ccc'],
                  [1, '#ccc']
                ],
                width: 4
              }
            },
            axisLabel: {
              show: false
            },
            detail: {
              show: false
            }
          },
          {
            type: 'gauge',
            radius: '80%',
            splitNumber: 1,
            min: 0,
            max: 360,
            startAngle: 90,
            endAngle: 449.9,
            axisLine: {
              show: false,
              lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [
                  [1, '#8f8f8f']
                ]
              }
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: '#8f8f8f',
                width: 1
              },
              length: '-2%',
              splitNumber: 60
            },
            splitLine: {
              show: true,
              length: 12,
              lineStyle: {
                color: '#8f8f8f',
              }
            },
            axisLabel: {
              show: false
            },
            detail: {
              show: false
            }
          },
          {
            name: '',
            type: 'gauge',
            min: 0,
            max: 360,
            startAngle: 90,
            endAngle: -269.9999,
            radius: '80%',
            splitNumber: 12,
            axisLine: {
              lineStyle: {
                width: 5,
                shadowBlur: 0,
                color: [
                  [0.25, '#DDBD4D'],
                  [0.5, '#E43F3D'],
                  [0.75, '#7CBB55'],
                  [1, '#9CD6CE']
                ]
              }
            },
            axisTick: {
              show: true,
              splitNumber: 1
            },
            splitLine: {
              length: 10,
              lineStyle: {
                width: 2
              }
            },
            axisLabel: {
              formatter: function(e) {
                switch (e + "") {
                  case "0":
                    return "正北";
                  case "360":
                    return "正北";
                  case "180":
                    return "正南";
                  case "90":
                    return "正东";
                  case "270":
                    return "正西";
                  default:
                    return e;
                }
              },
              textStyle: {
                fontSize: 12,
                fontWeight: ""
              }
            },
            pointer: {
              show: true,
            },
            detail: {
              formatter: function(param) {
                var level = '';
                if (param > 0 && param < 90) {
                  level = '东北'
                } else if (param > 90 && param < 180) {
                  level = '东南'
                } else if (param > 180 && param < 270) {
                  level = '西南'
                } else if (param > 270 && param < 360) {
                  level = '西北'
                } else if (param == 360) {
                  level = '正北'
                } else if (param == 270) {
                  level = '正西'
                } else if (param == 90) {
                  level = '正东'
                } else if (param == 180) {
                  level = '正南'
                }
                return "当前风向:"+level + "(" + param + "°)";
              },
              offsetCenter: [0, 140],
              textStyle: {
                fontSize: 40
              }
            },
            data: [{
              value: 279,
              name: ''
            }]
          },
          {
            name: '风速',
            type: 'gauge',
            center: ['60%', '35%'],
            radius: '22%',
            min: 0,
            max: 60,
            startAngle: 90,
            endAngle: -269.9999,
            splitNumber: 12,
            animation: 0,
            pointer: {
              show: 1,
              length: '60%',
              width: 3
            },
            itemStyle: {
              normal: {
                color: '#00b0b0',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2
              }
            },
            axisLine: {
              lineStyle: {
                color: [
                  [1, '#337ab7']
                ],
                width: 6
              }
            },
            splitLine: {
              show: 1,
              length: 6,
              lineStyle: {
                width: 1
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: 1,
              distance: 1,
              textStyle: {
                color: '#0000ff'
              },
              formatter: function(t) {
                switch (t + '') {
                  case '10':
                    return '10';
                  case '20':
                    return '20';
                  case '30':
                    return '30';
                  case '40':
                    return '40';
                  case '50':
                    return '50';
                  case '60':
                    return '60';
                }
              }
            },
            detail: {
              formatter: function(param) {
                return "当前风速:" + param + "m/s";
              },
              offsetCenter: [0, 60],
              textStyle: {
                fontSize: 12
              }
            },
            data: [{
              value: 3.2,
              name: ''
            }]
          }
        ]
      };
      setInterval(function() {
        var datavalue = (Math.random() * 360).toFixed(2);
        var datavalue2 = (Math.random() * 60).toFixed(2);
        option.series[2].data[0].value = datavalue;
        option.series[3].data[0].value = datavalue2;
        campus.setOption(option, true);
      }, 1000);
    },
    averageInfo() {
      let average = echarts.init(document.getElementById("average"));
      average.setOption({
        title: {text: '2min平均风速'},
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'直接访问',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
            name:'邮件营销',
            type:'bar',
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'联盟广告',
            type:'bar',
            stack: '广告',
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'视频广告',
            type:'bar',
            stack: '广告',
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name:'搜索引擎',
            type:'bar',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine : {
              lineStyle: {
                normal: {
                  type: 'dashed'
                }
              },
              data : [
                [{type : 'min'}, {type : 'max'}]
              ]
            }
          },
          {
            name:'百度',
            type:'bar',
            barWidth : 5,
            stack: '搜索引擎',
            data:[620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name:'谷歌',
            type:'bar',
            stack: '搜索引擎',
            data:[120, 132, 101, 134, 290, 230, 220]
          },
          {
            name:'必应',
            type:'bar',
            stack: '搜索引擎',
            data:[60, 72, 71, 74, 190, 130, 110]
          },
          {
            name:'其他',
            type:'bar',
            stack: '搜索引擎',
            data:[62, 82, 91, 84, 109, 110, 120]
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss"></style>
