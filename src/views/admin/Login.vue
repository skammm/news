<template>
  <div class="admin_login">
     <tab-bar></tab-bar>
     <el-form label-position="top" label-width="80px" :model="formDate">
      <h2>Login</h2>
      <el-form-item label="帐号">
        <el-input v-model="formDate.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formDate.userPwd"></el-input>
      </el-form-item>
      <el-button type="success" round @click="login">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import {userLogin} from 'network/user.js'
import TabBar from 'components/content/tabBar/TabBar.vue'
export default {
  name: 'Login',
  inject:['routerRefresh'],   
  data() {
    return {
      formDate:{
        userName:'',
        userPwd:''
      }
    };
  },
  components:{
    TabBar
  },
  watch: {},
  computed: {},
  methods: {
    login(){
      userLogin(this.formDate).then((res)=>{
       
        if(res.status === 200){    
          this.routerRefresh();
          
          this.$message.success(res.data.desc);
          const data = res.data.data;
          localStorage.setItem('token',data);
          const obj = JSON.parse(data);
          if(obj.userRole==='管理员'){
            this.$router.push(`/admin/${obj.userId}`);
          }else if(obj.userRole==='员工'){
            this.$router.push('/');
          }
        }else{
           this.$message.success('操作失败'); 
        }
      })
    }
  },
  created() {},
  mounted() {}
};
</script>
<style  scoped>

.el-form{
  width: 300px;
  position:absolute;
  top:30%;
  left: 60%;
}
.admin_login{
  width: 100%;
  height: 100vh;
  /* background: url('~assets/img/admin/login.png') no-repeat #040116; */
}


</style>