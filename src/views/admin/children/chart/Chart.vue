<template>
  <div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <div id="box" :style="{width: '900px', height: '600px'}" :class="{isvasibility:!isShow}">
      
    </div>
    <div class="el-icon-error btn" :class="{isvasibility:!isShow}" @click="hide"></div>
    
     <!-- <div id="box" :class="{hide:isShow}"></div> -->
  </div>
</template>

<script>
import { getSubscribe } from "network/subscribe";
//  let echarts = require('echarts/lib/echarts')
//   // 引入柱状图组件
//   require('echarts/lib/chart/pie')
//   // 引入提示框和title组件
//   require('echarts/lib/component/tooltip')
//   require('echarts/lib/component/title')
export default {
  name: "Chart",
  data() {
    return {
      formData: {
        pageNumber: 0,
        pageSize: 1000
      },
      str: [],
      pieData: [],
      
      getData:{},
      xAxis:[],
      sub:[],
      add:[],
      isShow:false
    };
  },

  computed: {},
  methods: {
    hide(){
      this.isShow = false;
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表

      myChart.setOption({
        title: {
          text: "不同报刊类别的订阅占比",
          left: "center",

          textStyle: {
            color: "#ccc",
            fontStyle: "italic" //标题字体
          }
        },

        series: {
          type: "pie",
          radius: "55%",

          data: this.pieData
        }
      });
      
      if(myChart._$handlers.click){
          myChart._$handlers.click.length = 0;
      }
      myChart.on('click', (params)=>{
        console.log('ll')
        this.isShow = true;
        this.getSub(params.name)
        
      });
    },
    getSub(params){
      const data = {}
      this.sub = []
      this.add = []
      this.getData.forEach(item=>{
        if(item.filed1 === params){
          if(!data[item.filed2]&&item.type == 1){
            data[item.filed2] = {}
            data[item.filed2]['sub'] = 1
            data[item.filed2]['add'] = 0
          }else if(!data[item.filed2] && item.type == 2){
            data[item.filed2] = {}
            data[item.filed2]['sub'] = 0
            data[item.filed2]['add'] = 1
          }
          
          if(data[item.filed2] && item.type == 1){
            data[item.filed2]['sub'] += 1
          }else if(data[item.filed2] && item.type == 2){
            data[item.filed2]['add'] += 1;
          }
        } 
      })
      
      this.xAxis = Object.keys(data);
      this.xAxis.forEach(item=>{
        this.sub.push(data[item]['sub'])
        this.add.push(data[item]['add'])
      })
      console.log(this.xAxis)
      console.log(this.sub)
      console.log(this.add)
      this.drawSub();
      
    },
    drawSub() {
      let myChart = this.$echarts.init(document.getElementById("box"));
      myChart.setOption({
         backgroundColor: 'rgb(82,94,100',
 
        title: {
          text: '杂志订阅人数汇总',
          subtext: '该类别',
          x: 'center'
        },
 
        legend: {
          // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
          orient: 'horizontal',
          // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
          x: 'left',
          // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
          y: 'top',
          data: ['订阅','收藏']
        },
 
        //  图表距边框的距离,可选值：'百分比'¦ {number}（单位px）
        grid: {
            top: '16%',   // 等价于 y: '16%'
            left: '8%', 
            right: '8%',
            bottom: '3%',
            containLabel: true
        },
 
        // 提示框
        tooltip: {
          trigger: 'axis'
        },
 
        //工具框，可以选择
        toolbox: {
            feature: {
                saveAsImage: {
                  backgroundColor:'#fff'
                }, //下载工具
                magicType:{
                  type:['bar','line']
                }
            }
        },
 
        xAxis: {
          name: '杂志名',
          type: 'category',
          axisLine: {
            lineStyle: {
              // 设置x轴颜色
              color: '#fff'
            }
          },
          // 设置X轴数据旋转倾斜
          axisLabel: {
            rotate: 30, // 旋转角度
            interval: 0  //设置X轴数据间隔几个显示一个，为0表示都显示
            },
          // boundaryGap值为false的时候，折线第一个点在y轴上
          boundaryGap: false,
          data: this.xAxis
        },
 
        yAxis: {
          name: '数值',
          type: 'value',
          min:0, // 设置y轴刻度的最小值
          max:5,  // 设置y轴刻度的最大值
          splitNumber:5,  // 设置y轴刻度间隔个数
          axisLine: {
            lineStyle: {
              // 设置y轴颜色
              color: '#fff'
            }
          },
        },
 
        series: [
          {
            name: '订阅',
            data: this.sub,
            type: 'line',
            // 设置小圆点消失
            // 注意：设置symbol: 'none'以后，拐点不存在了，设置拐点上显示数值无效
            // symbol: 'none',
            // 设置折线弧度，取值：0-1之间
            smooth: 0.5,
            itemStyle:{
              normal:{
                // 拐点上显示数值
                label : {
                show: true
                },
                        
              }
            }
          },
 
          {
            name: '收藏',
            data: this.add,
            type: 'line',
            // 设置折线上圆点大小
            symbolSize:8,
            itemStyle:{
              normal:{
                // 拐点上显示数值
                label : {
                show: true
                },
                borderColor:'red',  // 拐点边框颜色
                lineStyle:{                 
                  width:5,  // 设置线宽
                  type:'dotted'  //'dotted'虚线 'solid'实线
                }
              }
            }
          },
        ],
        
        color: ['#00EE00', '#FF9F7F','#FFD700']

      });
    }
  },

  created() {
    getSubscribe(this.formData).then(res => {
      console.log(res);
      this.getData = res.data.content;
      const content = res.data.content;
      content.forEach(item => {
        this.str.push(item.filed1);
      });
      var countedNames = this.str.reduce(function(allNames, name) {
        if (name in allNames) {
          allNames[name]++;
        } else {
          allNames[name] = 1;
        }
        return allNames;
      }, {});

      for (let name in countedNames) {
        var obj = {};
        obj.name = name;
        obj.value = countedNames[name];
        this.pieData.push(obj);
      }
    });
  },
  mounted() {
    this.drawLine();
    
  },
  watch: {
    pieData: {
      handler(newVal, oldVal) {
        this.drawLine();
      },
      deep: true
    }
  }
};
</script>
<style  scoped>
#myChart {
  margin: 0 auto;
  position: relative;
  top: 50px;
}
#box{
  position:relative;
  top:-300px;
  left: 50px;
  z-index: 50;
}
.isvasibility{
  visibility: hidden;
}
.btn{
  position: absolute;
  top:-20px;
  right:-10px
}

</style>