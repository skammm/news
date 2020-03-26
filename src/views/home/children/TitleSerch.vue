<template>
  <div class="title">
    <div class="left">
      <img src="~assets/img/home/x10.jpg" alt="" width="60" height="60">
      <div>
        <p class="name">龙腾企业</p>
        <p>China Post</p>
      </div>
      <div class="ename">报刊订阅</div>
    </div>
    <div class="right">
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleServer',
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: ''
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
  .title{
    display: flex;
    padding:0 100px;
    justify-content:space-between;
    margin-top: 20px;
  }
  .left{
    display: flex;
    color:#666;
  }
  .name{
    font-weight: 700;
    font-size: 2em;
    margin:0;
  }
  .ename{
    position: relative;
    bottom: -30px;
    left:10px;
    font-size: 1.2em;
    font-weight: 800;
    color: darkgreen;
  }
  .el-input-group{
     width:400px;
     
   }
  .el-select{
    width:130px;
  }
  .el-input-group__append .el-button{
    background-color:  rgb(57, 126, 107);
  }
</style>