
<template>
  <div id="tabbar">
     <!-- Static navbar -->
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <div class="navbar-brand">龙腾报刊订阅</div>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li  @click="goto('/home')"><a href="javascript:;"><i class="glyphicon glyphicon-search" ></i>首页</a></li>
            <li><a href="javascript:;"><i class="glyphicon glyphicon-map-marker"></i>浙江省</a></li>
            
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li @click="goto('/notice')"><a href="javascript:;"><i class="glyphicon glyphicon-list"></i>公告信息</a></li>
            <li v-if="isShow" @click="goto('/LoginA')"><a href="javascript:;"><i class="glyphicon glyphicon-user"></i>登陆</a></li>
             <li v-if="!isShow" @click="loginOut"><a href="javascript:;"><i class="glyphicon glyphicon-off"></i>退出</a></li>
            <li v-if="!isShow"><a href="javascript:;"><i class="glyphicon glyphicon-hand-right"></i>你好呀！{{user}}</a></li>
            <li v-if="!isShow" @click="goto('/mysubscribe/1')"><a href="javascript:;"><i class="glyphicon glyphicon-hand-right"></i>我的订阅</a></li>
            <li v-if="!isShow" @click="goto('/mysubscribe/2')"><a href="javascript:;"><i class="glyphicon glyphicon-hand-right"></i>我的收藏</a></li>
            
            <!-- <li @click="goto('/LoginS')"><a href="javascript:;">员工登陆<span class="sr-only">(current)</span></a></li> -->
            
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'MainTabBar',
  data() {
    return {
      isShow:true,
      user:'',
      
    };
  },
  components:{
    
  },
  methods:{
    goto(path){
      this.$router.push(path)
    },
    loginOut(){
      localStorage.clear("token");
      this.isShow = true;
      this.$router.push('home')
    }
  },
  created(){
    const token = localStorage.getItem("token");
    console.log(token)
    if(token){
      this.isShow = false;
      this.user = JSON.parse(token).userName; 
    }
  },
  

};
</script>
<style  scoped>
 
  .active{
    background: #ccc;
  }
  .navbar{
    margin-bottom: 0px;
  }
  #app .container{
    color:#fff;
  }
</style>