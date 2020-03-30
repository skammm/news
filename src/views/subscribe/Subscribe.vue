<template>
  <div id="subscribe">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>书单详情</el-breadcrumb-item>  
    </el-breadcrumb>
    <div class="s_content">
      <h2>科技报刊</h2>
      <p>科技期刊传承人类文明，荟萃科学发现，引领科技发展，直接体现国家科技竞争力和文化软实力。科技期刊为读者提供内容深入浅出，通俗易懂的科普内容，满足求知渴望。</p>
      <div class="card" v-for="item in content" :key="item.id">
        <img :src="item.pic" alt="" width="170" height="210">
        <div class="right">
          <h4>{{item.title}}</h4>
          <p class="name">{{item.pressInfo}}</p>
          <p>作者：{{item.pressName}}</p>
          <el-button type="primary" @click="sub(item.id,1,item.filed1,item.title)">现在订阅</el-button>
          <el-button type="warning" icon="el-icon-star-off" circle @click="sub(item.id,2,filed1,item.title)"></el-button>
       </div>
      </div>
    </div>
  </div>


</template>

<script>
import {getProduct} from 'network/product.js'
import {subscribe,getSubscribe} from 'network/subscribe.js'
export default {
  name: 'Subscribe',
  data() {
    return {
      formData:{
          pageNumber:0,
          pageSize:2, 
        },
      content:[],
      form:{
        pageNumber:0,
        pageSize:20,
        userId:this.getId(),
        type:''
      },
      mypress:[],
      isSub:false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    getProducts(){
      this.formData.pressTypeId = this.$route.params.sub;
      getProduct(this.formData).then(res=>{
      
      this.content = res.data.content;
      console.log(this.content)
      this.content.forEach(item => {
            let fs = item.image.slice(44);
            fs = fs.replace('\\','/');
         
            item.pic=require(`../../${fs}`);     
          });
      })
    },
    sub(pressId,type,filed1,filed2){
      this.isSub = false;
      this.form.type = type;
     
       const str = type == 1?'订阅':'收藏';
       getSubscribe(this.form).then(res=>{
        
        this.mypress = res.data.content;
      
        if(this.mypress.length>10){
         this.$message.error(`最多只能${str}10本`)
         return;
        }
        for(var i=0;i<this.mypress.length;i++){
              if(this.mypress[i].pressId == pressId){
                this.isSub = true;
                this.$message.error(`你已${str}过，请重新选择`)
                return;
              }
            }
            const userId = JSON.parse(localStorage.getItem("token")).userId;
            const FormData = {
              pressId,
              userId,
              type,
              filed1,
              filed2
            }
            subscribe(FormData).then(res=>{
            console.log(res)
            if(res.status===200){
              if(res.data.type===1){ 
                this.$message.success('你已订阅成功')
              }else{
                this.$message.success('你已成功收藏')
              }
            }
      })
       
       })
       
         
     
      // if(this.isSub){
      //   return;
      // }
      
      
    },
    getId(){
      return JSON.parse(localStorage.getItem('token')).userId
    }
  },
  created() {
    this.getProducts();
  },
  mounted() {},
  activated(){
    
    //  getSubscribe(this.form).then(res=>{
    //     this.mypress = res.data.content;
    //  })
   
  }
};
</script>
<style  scoped>
  #subscribe{
    padding:2% 15%;
    /* background: rgb(241, 239, 239); */
    background: #000;
    /* color: #fff; */
  }
  .s_content{
    background: #fff;
    margin: 2% 5%;
    padding:10px 50px;  
  }
  .s_content h2{
    text-align: center;
    margin-bottom: 30px;
  }
  .s_content>p{
    text-indent: 2em;
  }
  .card{
    display: flex;
    justify-content: space-around;
    border: 1px solid rgb(241, 239, 239);
    margin:20px 0;
  }
  .card p{
    margin:20px 0;
  }
  .name{
    color:orangered;
    font-size: 1.2em;
    max-width: 200px;
    word-break:break-all;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    overflow:hidden;
  }
  h4{
    font-weight: 600;
  }
</style>