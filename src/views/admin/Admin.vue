<template>
 <div id="admin">
   <el-row class="tac">
  
   <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户信息管理</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="1-1" @click="goto('userAdd')">添加用户</el-menu-item>
            <el-menu-item index="1-2" @click="goto('userOperate')">用户删改</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
     
       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订阅信息统计</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="2-1">部门</el-menu-item>
            <el-menu-item index="2-2">用户</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>公告信息管理</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="3-1" @click="goto('messageAdd')">发布公告</el-menu-item>
            <el-menu-item index="3-2"  @click="goto('noticeOperate')">公告删改</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
       <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>报刊管理</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="4-1" @click="goto('productAdd')">添加商品</el-menu-item>
            <el-menu-item index="4-2" @click="goto('productOperate')">商品查询</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
       <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>分类管理</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="5-1" @click="goto('typeAdd')">添加分类</el-menu-item>
            <el-menu-item index="5-2" @click="goto('typeOperate')">分类删改</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
       <!-- <el-menu-item index="5" @click="goto('typeAdd')">
        <i class="el-icon-menu"></i>
        <span slot="title">添加分类</span>
      </el-menu-item> -->
       <el-menu-item index="6" @click="goto('chart')">
        <i class="el-icon-menu"></i>
        <span slot="title" >生成期刊报表</span>
      </el-menu-item>

      
    </el-menu>
  </el-col>
</el-row>
 <div class="position">
   <router-view></router-view>
 </div>
 </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      id:''
    };
  },
  methods: {
    
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      goto(path){
        this.id = this.$route.params.id;
        this.$router.push(`/admin/${this.id}/${path}`);
      }
    
  },
  beforeCreate(){
    const token = JSON.parse(localStorage.getItem("token"));
    if(!token || !token.userRole === '管理员'){
      this.$router.push('loginA');
    }
    
  }
  
  
  
};
</script>
<style  scoped>
  #admin{
    height: calc(100vh - 50px);
  }
  .el-row,.el-col,.el-menu{
    height: 100%;
  }
  .el-row{
    width: 40%;
  }
  .el-col-12{
    width: 250px;
  }
  .position{
    position: absolute;
    top:80px;
    left: 300px;
    right:100px;
    bottom: 0;

  }
</style>