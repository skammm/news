<template>
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="标题" >
    <el-input v-model="form.title"></el-input>
  </el-form-item>
  <el-form-item label="内容">
    <el-input type="textarea" v-model="form.content"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">添加</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import {postNoticeMultidata} from 'network/notice.js'

export default {
  name: 'NoticeAdd',
  data() {
    return {
     
        form:{
         title:'',
         content:'',
        }
      
    };
  },
  watch: {},
  computed: {},
  methods: {
     onSubmit() {
     
        postNoticeMultidata(this.form).then((res) => {
           console.log(res);
           if(res.status === 200){
             this.$message.success(res.data.desc);
           }else{
               this.$message.error('添加失败');
           }
            
        })


      
       
    },
  }

};
</script>
<style  scoped>
</style>