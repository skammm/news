<template>
  <div class="type_update">
    <el-form enctype="multipart/form-data">
    <div class="demo-input-suffix">
      <el-input
        placeholder="输入分类名称"
        suffix-icon="el-icon-edit el-input__icon"
        v-model="input2">
      </el-input>
    </div>
    <input type="file" @change="getFile($event)"> 
    
     <el-button type="success" @click="update">修改</el-button>
    </el-form>
  </div>
</template>

<script>
import {selectType,updateType} from 'network/type.js'
export default {
  name: 'TypeUpdate',
  data() {
    return {
      input2:'',
      file:'',
      fileList: [],
      id:0
    };
  },
  watch: {},
  computed: {},
  methods: {
      getFile(event) {
        this.file = event.target.files[0];
      },
      update(){
        let formData = new FormData();
        // 向 formData 对象中添加文件
        formData.append('file',this.file);
        formData.append('name',this.input2);
        formData.append('id',this.id);


        
        updateType(formData).then((res)=>{
          console.log(res);
          if(res.status === 200){
            this.$message.success(res.data.desc);
            this.$router.back();
          }
        })
      }
  },
  created() {
    selectType(this.$route.params.type).then((res)=>{
      if(res.status===200){
        const data = res.data.data;
        this.id = data.id;
        this.input2 = data.name;
      }
    })
  },
  mounted() {}
};
</script>
<style  scoped>
.demo-input-suffix{
    width: 300px;
  }
</style>