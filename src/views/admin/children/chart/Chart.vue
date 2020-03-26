<template>
  <div id="myChart" :style="{width: '300px', height: '300px'}">

  </div>
</template>

<script>
  import {getSubscribe} from 'network/subscribe'
   let echarts = require('echarts/lib/echarts')
    // 引入柱状图组件
    require('echarts/lib/chart/pie')
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
export default {
  name: 'Chart',
  data() {
    return {
     
      formData:{
        pageNumber:0,
        pageSize:1000,
      },
      str:[],
      pieData:[]
    };
  },
  watch: {},
  computed: {},
  methods: {
     drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
 
        myChart.setOption({
              labelLine: {  //引导线样式
                  normal: {
                    lineStyle: {
                      color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.5, //0-1，越大越平滑弯曲
                    length: 10,  //从块到文字的第一段长
                    length2: 20  //拐弯到文字的段长
                  }
                },
              title: {
                text: '不同报刊类别的订阅占比',
                left: 'center',
                
                textStyle: {
                  color: '#ccc',
                  fontStyle: 'italic'//标题字体
                }
            },

             series: {
                type: 'pie',
                
                data:this.pieData
            }
        });
    }
  },

  created() {
    getSubscribe(this.formData).then(res=>{
     
      const content = res.data.content;
      content.forEach(item=>{
        this.str.push(item.filed1);
     
      })
      var countedNames = this.str.reduce(function (allNames, name) {
         if (name in allNames) { 
           allNames[name]++; 
           } else {
           allNames[name] = 1; 
           }
           return allNames; 
           }, {});
    
        for(let name in countedNames){
          var obj = {};
          obj.name = name;
          obj.value = countedNames[name];
          this.pieData.push(obj);

        }
     
    })
  },
  mounted() {
    this.drawLine();
  },
  watch:{
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
 #myChart{
   margin:0 auto;
   position: relative;
   top:50px;
 }
</style>