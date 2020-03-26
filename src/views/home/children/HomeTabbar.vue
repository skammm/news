<template>
  <div class="tabbar">
    <div >
      <div class="title">榜单分类</div>
      <el-menu class="el-menu-demo"  mode="horizontal">
        <el-menu-item  v-for="(item,index) in title" :key="item" @click="tabClick(index)">
          <span :class="{active:currentIndex===index}">{{item}}</span>
        </el-menu-item>
      
      </el-menu>

    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HomeTabbar',
  data() {
    return {
      title:['杂志分类','报纸分类','图书文创','省内报刊'],
      currentIndex:1
    };
  },
  methods: {
    tabClick(index){
      this.currentIndex = index;
    }
  },
  
};
</script>
<style  scoped>
  .tabbar{
    background-color: rgb(231, 227, 227);
    padding: 30px 100px 0 100px;
  }
   .title{
    font-weight: 600;
    font-size: 1.5em;
    color: rgb(57, 126, 107);
    margin-bottom: 10px;
  }
  .el-menu-demo span{
    display: block;
    font-size: 1.3em;
  }
  .active{
    border-bottom: 3px solid rgb(57, 126, 107);
  }
</style>