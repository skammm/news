<template>
  <div class="lead">
     <div class="title">
       报刊头条
     </div>
     <!-- <div class="content">
       <img src="~assets/img/home/x10.jpg" alt="" width="200" height="130">
       <div>
         <div class="c-title">《诸葛亮：权谋高手》</div>
         <div class="c-content">
           行江苏南京南昌机房撒附件阿娇是否就按分比你
         </div>
       </div>
     </div> -->
       <el-carousel height="130px" direction="vertical" :autoplay="true">
        <el-carousel-item v-for="item in 3" :key="item">
          <!-- <h3 class="medium"> -->
            <div class="content">
              <img src="~assets/img/home/x10.jpg" alt="" width="200" height="130">
              <div>
                <div class="c-title">《诸葛亮：权谋高手》
                </div>
                <div class="c-content">
                  行江苏南京南昌机房撒附件阿娇是否就按分比你
                </div>
              </div>  
             
            </div>
          <!-- </h3> -->
        </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'LeadNews',
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style  scoped>
  .content{
    display: flex;
    background-color: #fff;
  }
  .lead{
    padding: 0 100px;
  }
  .title{
    font-weight: 600;
    font-size: 1.1em;
    color: rgb(57, 126, 107);
    margin: 10px 0;
  }
  .content img{
    margin-right: 30px;
  }
  .c-title{
    font-size: .8em;
    color: #000;
    font-weight: 800;
  }
  .c-content{
    font-size: .6em;
  }
   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>