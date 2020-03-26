<template>
  <div id="n_update">
    <h3>编辑页面</h3>
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="标题" >
    <el-input v-model="form.title"></el-input>
  </el-form-item>
  <el-form-item label="内容">
    <el-input type="textarea" v-model="form.content"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">修改</el-button>
  </el-form-item>
</el-form>
  </div>
  
</template>

<script>
import {findNoticeMultidata,updateNoticeMultidata} from 'network/notice.js'
export default {
  name: 'NoticeUpdate',
  data() {
    return {
      form:{
         title:'',
         content:'',
         id:''
        }
    };
  },
  watch: {},
  computed: {},
  methods: {
    onSubmit(){
      updateNoticeMultidata(this.form).then((res)=>{
         this.$message.success(res.data.desc);
      })
    }
  },
  created() {
    findNoticeMultidata(this.$route.params.iid).then((res)=>{
      const data = res.data.data;
      this.form.id = this.$route.params.iid;
      this.form.title = data.title;
      this.form.content = data.content;
    })
  },
  mounted() {}
};
</script>
<style  scoped>
</style>