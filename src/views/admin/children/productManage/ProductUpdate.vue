<template>
  <div class="p_update">
     <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="报刊名称">
    <el-input v-model="form.title"></el-input>
  </el-form-item>
  <el-form-item label="作者">
    <el-input v-model="form.pressName"></el-input>
  </el-form-item>
  <el-form-item label="类型">
    <el-select v-model="form.pressTypeId" placeholder="请选择报刊类型">
      <el-option  v-for="item in type" :key="item.id" 
      :label="item.name" :value="item.id"></el-option>
      <!-- <el-option label="区域二" value="beijing"></el-option> -->
    </el-select>
  </el-form-item>

  
  
  
  <el-form-item label="报刊描述">
    <el-input type="textarea" v-model="form.pressInfo"></el-input>
  </el-form-item>
  <input type="file" @change="getFile($event)"> 
  <el-form-item>
    <el-button type="primary" @click="onSubmit">编辑</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import {getType} from 'network/type.js'
import {findProduct,addProduct} from 'network/product.js'
export default {
  name: 'ProductUpdate',
  data() {
    return {
       form: {
         pressInfo:'',
         title:'',
         pressName:'',
         pressTypeId:'',
         file:'',
         userId:''
        },
        
        type:[]
    };
  },
  watch: {},
  computed: {},
  methods: {
     getFile(event) {
      this.form.file = event.target.files[0];
    },
    onSubmit() {
         let item = this.type.filter(item=>{
          return item.id == this.form.pressTypeId;
        })
        let formData = new FormData();
        // 向 formData 对象中添加文件
        formData.append('file',this.form.file);
        formData.append('title',this.form.title);
        formData.append('pressInfo',this.form.pressInfo);
        formData.append('pressTypeId',this.form.pressTypeId);
        formData.append('pressName',this.form.pressName);
        formData.append('userId',this.form.userId);
        formData.append('filed1',item[0].name);
        

        addProduct(formData).then((res)=>{
         if(res.status === 200){
             this.$message.success('添加成功');
         }
        })
    },
    findProducts(){
      let product = {
       id:this.$route.params.product 
      }
      findProduct(product).then(res=>{
         console.log(res)
        if(res.status===200){
          this.form = res.data.data;
          // this.type.forEach(item => {
          //   if(this.form.pressTypeId == item.id){
          //     console.log(document.getElementsByClassName('el-input__inner'))
          //     document.getElementsByClassName('el-input__inner').innerHTML = 'jjjj';
          //   }
          // });
     
        }
      })
    }
  },
  created() {
    this.form.userId = this.$route.params.id; 
    getType(0,20).then((res)=>{
      this.type = res.data.content;
      this.findProducts();
    })
    
    
  },
  mounted() {
    
  }
};
</script>
<style  scoped>
</style>