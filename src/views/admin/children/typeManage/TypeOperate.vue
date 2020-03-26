<template>
  <div class="type_operate">
   
    <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="分类名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="分类图片"
      prop="image">
      <template slot-scope="scope">
        <el-image :src="scope.row.pic"
        style="width: 60px; height: 80px"></el-image>
      </template>
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope" @click="handleSearch(scope.$index, scope.row)">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
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
import {getType,deleteType} from 'network/type.js'
export default {
  name: 'TypeOperate',
  data() {
    return {
        tableData: [],
        search: '',
        page:0,
        size:3,
        totalPages:0
    };
  },
  watch: {},
  computed: {},
  methods: {
      handleEdit(index, row) {
        console.log(index, row);
        this.$router.push(`/admin/${this.$route.params.id}/typeUpdate/${row.id}`);
      },
      handleDelete(index, row) {
        deleteType(row.id).then((res)=>{
          if(res.status === 200){
            this.$message.success('删除成功');
            this.getTypes();
          }
        })
      },
       handleSearch(index, row) {
        console.log(index, row);
      },
      getTypes(){
        getType(this.page,this.size).then((res)=>{
          console.log(res)
          this.totalPages = res.data.totalPages * 10;
          this.tableData  = res.data.content;
           this.tableData.forEach(item => {
            let fs = item.image.slice(44);
            fs = fs.replace('\\','/');
            console.log(fs)
            item.pic=require(`../../../../${fs}`);     
          });
        })
      },
      getPage(val){
        this.page = val - 1;
        this.getTypes();
      },
      prevPage(){
        this.page--;
        this.getTypes();
      },
      nextPage(){
        this.page++;
        this.getTypes();
      }
  },
  created() {
    this.getTypes();
  },
  mounted() {}
};
</script>
<style  scoped>
</style>