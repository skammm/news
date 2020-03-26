<template>
  <div id="home">
    <title-serch></title-serch>
    <home-swiper/>
    <news-serve></news-serve>
    <lead-news></lead-news>
    <!-- <home-tabbar></home-tabbar> -->
    <news-sort></news-sort>
   
  </div>
</template>

<script>
import TitleSerch from 'views/home/children/TitleSerch'
import HomeSwiper from 'views/home/children/HomeSwiper'
import NewsServe from 'views/home/children/NewsServe'
import LeadNews from 'views/home/children/LeadNews'
import HomeTabbar from 'views/home/children/HomeTabbar'
import NewsSort from 'views/home/children/NewsSort'


export default {
  name: 'home',
  data() {
    return {
    };
  },
  components:{
    TitleSerch,
    HomeSwiper,
    NewsServe,
    LeadNews,
    HomeTabbar,
    NewsSort,
  }
};
</script>
<style  scoped>
</style>