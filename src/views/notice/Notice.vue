<template>
 <div id="notice">
    <el-carousel :interval="10000" type="card" height="300px">
    <el-carousel-item v-for="item in content" :key="item.id">
      
   
        <div class="two">
          <div class="time">
            <div>{{item.createTime |  moment("YYYY-MM-DD hh:mm") }}</div>
          </div>
          <div class="message">
              <div class="title">{{item.title}}</div>
              <div class="content">{{item.content}}</div>
          </div>
          
        </div>
     
      
      
    </el-carousel-item>
  </el-carousel>
 </div>
</template>

<script>
import {getNoticeMultidata} from 'network/notice.js'
export default {
  name: 'Notice',
  data() {
    return {
      content:[],
      page:0,
      size:7
    };
  },
  
  created() {
    getNoticeMultidata(this.page,this.size).then((res)=>{
        this.page = res.data.totalPages -1;
        getNoticeMultidata(this.page,this.size).then((res) => {
          this.content = res.data.content;
          console.log(res)
        })
    })
  },

};
</script>
<style  scoped>
 
  #notice{
   background: url('~assets/img/notice/5.jpg');
   padding-top: 50px;
   height: calc(100vh - 50px);
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    /* opacity: 0.75; */
    line-height: 300px;
    margin: 20px;

    
  }
  
  .el-carousel__item:nth-child(2n) {
    /* background-color: #99a9bf; */
    background: url('~assets/img/notice/5.jpg')
  }
  
  .el-carousel__item:nth-child(2n+1) {
    /* background-color: #d3dce6; */
    background: url('~assets/img/notice/2.jpg');
   
  }
  .two{
    display: flex;

  }
  .time{
    width: 160px;
    font-weight: 600;
    font-size: 1.5em;
    padding: 20px 10px;
  }
  .message{
    padding: 20px 10px;
    color:#fff;
  }
  .title{
 
    font-weight: 500;
    font-size: 1.5em;
    margin-bottom: 20px;
  }

</style>