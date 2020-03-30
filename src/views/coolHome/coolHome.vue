<template>
  <div id="coolHome">
    <div class="element" :class="{gorotate:isShow}">
      
      <div class="front">
        <img src="~assets/img/home/top.png" alt="" style="width:100%">
        <img class="goleft" src="~assets/img/home/person.png" alt="" style="width:25%">
        <img class="goball" src="~assets/img/home/round.png" alt="" style="width:25%">
        <!-- <img class="goscale" src="~assets/img/home/next.png" alt="" @click="gorotate"> -->
      </div>
      <div class="back">
        <!-- <img src="~assets/img/home/bg2.png" alt="" style="width:100%"> -->
        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "coolHome",
  data() {
    return {
      isShow:false,
    };
  },
  components:{
    
  },
  watch: {},
  computed: {},
  methods: {
    gorotate(){
      this.isShow = true
    }
  },
  created() {},
  mounted() {}
};
</script>
<style  scoped>
.element {
  position: relative;
  color: #fff;
  /* text-align: center; */
  /* line-height: 120px; */
  transform-style: preserve-3d;
  /* transition: 1s; */
  /* overflow: hidden; */
}
.element,
.front,
.back {
  width: 100%;
  height: 100vh;
  backface-visibility: hidden;
}
.front,
.back {
  position: absolute;
  left: 0;
  top: 0;
}
.front {
  background: #000000;
}
.back {
  /* background: #0f0; */
  transform: rotateX(180deg);
}
.gorotate{
  transform: rotateX(0deg);
  animation-duration: 3s;
  animation-name: rot;
  /* animation-iteration-count: infinite; */
  /* animation-direction: alternate; */
  animation-fill-mode:forwards;
}
@keyframes rot {
  100%{
    transform: rotateX(180deg);
  }
}
.goleft{
  transform: translateX(0);
  animation-duration: 6s;
  animation-name: hd;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.goball{
  transform: translateX(-150px);
  opacity: .3;
  animation-duration: 6s;
  animation-name: ball;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.goscale{
  transform: translateY(80px) scale(0.5);
  animation-duration: 3s;
  animation-name: sc;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes sc {
   100%{
      transform: translateY(80px) scale(0.8);
   }
}
@keyframes hd {
  100%{
    transform: translateX(250px);
  }
}
@keyframes ball {
  100%{
    transform: translateX(80px);
  }
}
</style>