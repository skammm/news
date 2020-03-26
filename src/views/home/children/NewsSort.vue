<template>
  <div id="sort">
    <div class="title">榜单分类</div>
    <div>
   
      <img v-for="(item,index) in image" :src="item"
       alt="" :key="item"  @click="goto(index)">
    </div>
  </div>
</template>

<script>
import {getType} from 'network/type.js'
export default {
  name: 'NewsSort',
  data() {
    return {
      image:[],
      // image1:require('../../../assets/img/sort2020022413215766209/jingji.jpg')
      content:[]
    };
  },
  watch: {},
  computed: {},
  methods: {
    goto(index){
      console.log(index)
      let id = this.content[index].id;
      this.$router.push(`/subscribe/${id}`)
    }
  },
  created() {
    getType(0,10).then((res)=>{
      this.content = res.data.content;
      let image = [];
      const content = res.data.content;
      content.forEach(item => {
        let fs = item.image.slice(44);
        fs = fs.replace('\\','/');
       
        image.push(require(`../../../${fs}`));
      });
      
      this.image = image;

    })
  },
  mounted() {}
};
</script>
<style  scoped>
  #sort{
    padding: 0 100px;
  }
  #sort img{
    cursor: pointer;
    margin:10px 20px 0 0;
  }
    .title{
    font-weight: 600;
    font-size: 1.5em;
    color: rgb(57, 126, 107);
    margin-bottom: 10px;
  }
</style>