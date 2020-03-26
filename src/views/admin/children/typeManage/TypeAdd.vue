<template>
  <div class="type_add">
    <el-form enctype="multipart/form-data">
    <div class="demo-input-suffix">
      <el-input
        placeholder="输入分类名称"
        suffix-icon="el-icon-edit el-input__icon"
        v-model="input2">
      </el-input>
    </div>
    <input type="file" @change="getFile($event)"> 
    
     <el-button type="success" @click="add">添加</el-button>
    </el-form>
  </div>

</template>

<script>
import {addType} from 'network/type.js'
export default {
  name: 'TypeAdd',
  data() {
    return {
      input2:'',
      file:'',
      fileList: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    
    getFile(event) {
      this.file = event.target.files[0];
    },
      add(){
        let formData = new FormData();
        // 向 formData 对象中添加文件
        formData.append('file',this.file);
        formData.append('name',this.input2);
       


        
        addType(formData).then((res)=>{
       
          if(res.status === 200){
            this.$message.success(res.data.desc);
          }
        })
      }
  },
  created() {},
  mounted() {}
};
</script>
<style  scoped>
  .demo-input-suffix{
    width: 300px;
  }
  /* input[type=file]{
    display: none;
  } */
</style>