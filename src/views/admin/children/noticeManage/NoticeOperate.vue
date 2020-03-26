<template>
  <div id="operate">
      
    <el-table
    :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Date"
      prop="createTime">
    </el-table-column>
    <el-table-column
      label="Title"
      prop="title">
    </el-table-column>
    <el-table-column
      align="right">
    <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索" @change="handleChange(scope.$index, scope.row)"/>
      </template>

       
     
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)" >Edit</el-button>
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
import {getNoticeMultidata,
       deleteNoticeMultidata,
       } from 'network/notice.js'

export default {
  name: 'NoticeOperate',
  data() {
    return {
      page:0,
      size:6,
      tableData:[],
      search:'',
      totalPages:0,
      id:''
    };
  },
  watch: {
  
  },
  computed: {},
  methods: {
    handleEdit(index, row) {
        console.log(index, row);
        this.row = row;
        this.id = this.$route.params.id;
        this.$router.push(`/admin/${this.id}/noticeUpdate/${row.id}`);
      },
       handleChange(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {  
        deleteNoticeMultidata(row.id).then((res)=>{
          this.getData();
          if(res.status == 200){
            this.$message.success('删除成功');
          }else{
            this.$message.error('出问题啦');
          }
        })
      },
      getData(){
         getNoticeMultidata(this.page,this.size).then((res) => {
          console.log(res);
          
          this.totalPages = res.data.totalPages * 10;
         
          this.tableData = res.data.content;
          this.tableData.map((item)=>{
            item.createTime = item.createTime.slice(0,10);
          })
         
        })
      },
      getPage(val){
        this.page = val - 1;
        this.getData();
      },
      prevPage(){
        this.page -= 1;
        this.getData();
      },
      nextPage(){
        this.page += 1;
        this.getData()
      },
   
      
      
      
  },
  created() {
      this.getData();
  },
  mounted() {}
};
</script>
<style  scoped>
.el-pagination{
  padding: 20px 10px;
}
</style>