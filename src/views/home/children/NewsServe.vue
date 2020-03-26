<template>
  <div class="serves">
     <div class="title">报刊服务</div>
     <div class="row">
       <div class="circle">
         <span></span>
         <div>热门订阅</div>
       </div>
       <div class="circle">
         <span></span>
         <div>特色店铺</div>
       </div>
       <div class="circle">
         <span></span>
         <div>好评排行</div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'NewsServe',
  data() {
    return {

    };
  },
  
};
</script>
<style  scoped>
  .title{
    font-weight: 600;
    font-size: 1.5em;
    padding: 0 100px;
  }
  .serves{
     color: rgb(57, 126, 107);
  }
  .row{
    width: 100%;
    align-items: center;
    display: flex;
    justify-content:space-between;
    margin:20px 0;
  }
  .row .circle{
    width: 100px;
    height: 100px;
    border-radius:50%;
    border: 1px solid rgb(57, 126, 107);
    text-align: center;
  }
  span{
    font-family:'icomoon';
    font-size: 3em;
  }
</style>