<template>
    <swiper>
    <swiper-item>
        <img src="~assets/img/swiper/1.jpg" alt="" >     
    </swiper-item>
    <swiper-item>
        <img src="~assets/img/swiper/2.jpg" alt="" >     
    </swiper-item>
    <swiper-item>
        <img src="~assets/img/swiper/3.jpg" alt="" >     
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
export default {
  name: 'HomeSwiper',
  data() {
    return {
      isLoad:false
    };
  },
  
  components:{
      Swiper,
      SwiperItem
  },
    methods: {
		
    
    }
 
};
</script>
<style  scoped>
</style>