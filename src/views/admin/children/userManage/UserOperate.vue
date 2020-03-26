<template>
  <div id="u_operate">
   
    <input type="text" v-model="search">
    <el-table
    :data="tableData.filter(data => !search ||!data.userNickName||data.userNickName.includes(search))"
    border
    style="width: 100%">
   
       
   
    <el-table-column
      fixed
      prop="createDate"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="userNickName"
      label="员工号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="userRole"
      label="角色"
      width="120">
    </el-table-column>
    <el-table-column
      prop="userEmail"
      label="邮箱号"
      width="120">
    </el-table-column>


    <el-table-column
      prop="department"
      label="部门"
      width="300">
    </el-table-column>
    <el-table-column
      prop="userPhone"
      label="电话"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
         -->
         <el-button type="primary" icon="el-icon-edit" circle 
         @click="handleClick(scope.row)" size="mini"
         ></el-button>
        <!-- <el-button type="text" size="small">编辑</el-button>
         -->
         <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.row)" size="mini"></el-button>
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
import {getUser,deleteUser} from 'network/user.js'
export default {
  name: 'UserOperate',
  data() {
    return {
      tableData:[],
      pageNumber:0,
      pageSize:6,
      totalPages:0,
      search:''
    };
  },
  watch: {},
  computed: {},
  methods: {
      handleClick(row) {
        this.$router.push(`/admin/${this.$route.params.id}/userUpdate/${row.userId}`);
        console.log(row);
      },
      handleDelete(row){
        
        deleteUser(row.userId).then((res)=>{
          if(res.status === 200){
            this.$message.success('删除成功');
            this.getData();
          }
        })
      },
      handleChange(index,row){
        
      },
      handleSearch(index,row){

      },
    
      getData(){
        getUser(this.pageNumber,this.pageSize).then((res)=>{
          
          this.totalPages = res.data.totalPages * 10;
          
          this.tableData = res.data.content;
          this.tableData.map((item)=>{
            item.createDate = item.createDate.slice(0,10);
          })
        })
      },
      getPage(val){
        console.log(val)
        this.pageNumber = val-1;
        this.getData();
      },
      prevPage(){
        this.pageNumber--;
        this.getData();
      },
      nextPage(){
        this.pageNumber++;
        this.getData();
      }
  },
  created() {
    this.getData();
  },
  mounted() {}
};
</script>
<style  scoped>
</style>