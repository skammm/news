<template>
  <div class="product">
     <input type="text">
     <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="title"
      label="名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="filed1"
      label="类型"
      width="120">
    </el-table-column>
    <el-table-column
      prop="userId"
      label="上传人"
      width="120">
    </el-table-column>
    <el-table-column
      prop="pic"
      label="图片"
      width="120">
      <template slot-scope="scope">
        <el-image :src="scope.row.pic"></el-image>
      </template>
    </el-table-column>
    <el-table-column
      prop="pressInfo"
      label="描述"
      width="300">
    </el-table-column>
    
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
        <el-button type="text" size="small" @click="handleUpdate(scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      background
      layout="prev, pager, next"
      :total="totalPages" @current-change="getPage" 
      :current-change='1' @prev-click="prevPage"
      @next-click="nextPage">
    </el-pagination>
  </div>
</template>

<script>
import {getProduct,deleteProduct} from 'network/product.js'
export default {
  name: 'ProductOperate',
  data() {
    return {
        tableData: [],
        formData:{
          pageNumber:0,
          pageSize:2
        },
        totalPages:10
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleDelete(row) {
      let id = {
        id:row.id
      }
     
      deleteProduct(id).then((res)=>{
        if(res.status === 200){
          this.$message.success(res.data.desc);
          this.getProducts();
        }
      })  
    },
    handleUpdate(row){
       this.$router.push(`/admin/${this.$route.params.id}/productUpdate/${row.id}`);
    },
      getPage(val){
        this.formData.pageNumber = val - 1;
        this.getProducts();
      },
      prevPage(){
        this.formData.pageNumber--;
        this.getProducts();
      },
      nextPage(){
        this.formData.pageNumber++;
        this.getProducts();
      },
      getProducts(){
        getProduct(this.formData).then((res)=>{
          this.totalPages = res.data.totalPages * 10;
          console.log(res);
          this.tableData = res.data.content;
          this.tableData.forEach(item => {
            let fs = item.image.slice(44);
            fs = fs.replace('\\','/');
            console.log(fs)
            item.pic=require(`../../../../${fs}`);     
          });
          console.log(this.tableData)
        })
      }
  },
  created() {
    this.getProducts();
  },
  mounted() {}
};
</script>
<style  scoped>
</style>