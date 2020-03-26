<template>
  <div class="staff_login">
      <el-form label-position="top" label-width="80px" :model="formDate">
      <h2>员工登录</h2>
      <el-form-item label="员工号">
        <el-input v-model="formDate.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formDate.password"></el-input>
      </el-form-item>
      <el-button type="success" round>登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
       formDate:{
        name:'',
        password:''
      }
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

.staff_login{
  width: 100%;
  height: 100vh;
  background: url('~assets/img/notice/1.jpg') #040116;
  margin-top: -23px;
}
.form-signin-heading{
  color: #fff;
}
.el-form{
  width: 300px;
  position:absolute;
  top:200px;
  left: 800px;
}
</style>