<template>
  <div class="user_add">
   
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="姓名">
    <el-input v-model="formLabelAlign.userName"></el-input>
  </el-form-item>
  <el-form-item label="员工号">
    <el-input v-model="formLabelAlign.userNickName"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formLabelAlign.passWord"></el-input>
  </el-form-item>
  <el-form-item label="邮箱号">
    <el-input v-model="formLabelAlign.userEmail"></el-input>
  </el-form-item>
   <!-- <el-form-item label="所在部门">
    <el-input v-model="formLabelAlign.department"></el-input>
  </el-form-item> -->
   <el-form-item label="所在部门">
    <el-select v-model="formLabelAlign.department" placeholder="请选择所在部门" >
      <el-option v-for="item in selectName" :key="item.id" :label="item.name" :value="item.name"></el-option>
     
    </el-select>
  </el-form-item>
  <el-form-item label="电话">
    <el-input v-model="formLabelAlign.userPhone"></el-input>
  </el-form-item>
  <el-form-item label="角色">
    <el-input v-model="formLabelAlign.userRole"></el-input>
  </el-form-item>

  <el-button type="success" @click="addUser">添加</el-button>
</el-form> 
  </div>
</template>

<script>
import {addUser,getDepartment} from 'network/user.js'
export default {
  name: 'UserAdd',
  data() {
    return {
       labelPosition: 'right',
       selectName:[],
        formLabelAlign: {
          userName: '',
          userNickName: '',
          passWord: '',
          userEmail:'',
          department:'',
          userPhone:'',
          userRole:''
        },

       

    };
  },
  watch: {},
  computed: {},
  methods: {
    addUser(){
      console.log(this.formLabelAlign.department)
     addUser(this.formLabelAlign).then((res)=>{
       if(res.status === 200){
         this.$message.success(res.data.desc);
       }else{
         this.$message.error('操作失败');
       }
     })
    },
    select(){
      console.log(this.formLabelAlign.department)
    }
  },
  created() {
    getDepartment().then((res)=>{
      console.log(res)
      this.selectName = res.data.content;
     
    })
  },
  mounted() {}
};
</script>
<style  scoped>
.el-button{
  margin:10px 40%;
}
</style>