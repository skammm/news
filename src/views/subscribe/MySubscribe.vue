<template>
  <div class="my_sub">
     <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{title}}</el-breadcrumb-item>  
    </el-breadcrumb>
    <div class="s_content">
      <div class="card" v-for="item in conten" :key="item.id">
        <img :src="item.pic" alt="" width="170" height="210">
        <div class="right">
          <h4>{{item.title}}</h4>
          <p class="name">{{item.pressInfo}}</p>
          <p>作者：{{item.pressName}}</p>
          <el-button type="info" v-if="formDate.type == 1">开始阅读</el-button>
          <el-button type="danger" v-if="formDate.type == 1">取消订阅</el-button>
          <el-button type="info" v-if="formDate.type == 2" >现在订阅</el-button>         
       </div>
      </div>
    </div>
    <!-- <el-pagination
      background
      layout="prev, pager, next"
      :total="totalPages" @current-change="getPage" 
      :current-change='1' @prev-click="prevPage"
      @next-click="nextPage">
    </el-pagination> -->
  </div>
</template>

<script>
import {getSubscribe} from 'network/subscribe.js'
import {findProduct} from 'network/product.js'
export default {
  name: 'MySubscribe',
  data() {
    return {
      conten:[],
      formDate:{
        pageNumber:0,
        pageSize:20,
        userId:this.getId(),
        type:this.$route.params.type,
      },
      getItem:[],
      // item:{},
      
    };
  },
  watch: {},
  computed: {
    title(){
      return this.formDate.type == 1? '我的订阅' : '我的收藏';
    }
  },
  methods: {
    getSubs(){
      //  this.conten = [];
       getSubscribe(this.formDate).then(res=>{
          this.getItem = res.data.content;
          console.log(this.getItem)
          let arr = []
          for(let i=0;i<this.getItem.length;i++){
            arr.push(findProduct(this.getItem[i].pressId))
          }
          Promise.all(arr).then((res) => {
            console.log(res)
            res.forEach(item=>{
              const obj = item.data.data
               let fs = obj.image.slice(44);
               fs = fs.replace('\\','/');
               obj.pic=require(`../../${fs}`);     
              this.conten.push(obj)
            })
            
          }).catch((error) => {
            console.log(error)
          })


        //  for(let i=0;i<this.getItem.length;i++){
        //     findProduct(this.getItem[i].pressId).then(res=>{
        //       console.log(this.getItem[i].pressId)
        //       console.log(res)
        //       const obj = res.data.data
        //        let fs = obj.image.slice(44);
        //        fs = fs.replace('\\','/');
        //        obj.pic=require(`../../${fs}`);     
        //        console.log(obj)
        //        this.conten.push(obj)
        //        console.log(this.conten)
        //       })
        //   }

       })
      
       
    },
    getId(){
      return JSON.parse(localStorage.getItem('token')).userId
    },
    // getPage(val){

    // },
    // prevPage(){

    // },
    // nextPage(){

    // }
  },
  created() {
    this.getSubs();
  },
  // watch:{
  //   item(){
  //     console.log(this.item)
  //     this.conten.push(this.item)
  //   }
  // },
  mounted() {
   
  },

  
};
</script>
<style  scoped>
 .my_sub{
    padding:2% 15%;
    background: rgb(241, 239, 239);
  }
  .s_content{
    background: #fff;
    margin: 2% 5%;
    padding:10px 50px;  
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