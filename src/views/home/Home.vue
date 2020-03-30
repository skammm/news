<template>
  <div id="home">
    <!-- <tab-bar></tab-bar> -->
    <!-- <title-serch></title-serch> -->
    <cool-home></cool-home>
    <!-- <home-swiper/> -->
    <news-serve></news-serve>
    <!-- <lead-news></lead-news> -->
    <!-- <home-tabbar></home-tabbar> -->
    <news-sort></news-sort>
    
  </div>
</template>

<script>
import TabBar from 'components/content/tabBar/TabBar.vue'
import coolHome from 'views/coolHome/coolHome.vue'
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
    coolHome,
    TabBar
  }
};
</script>
<style  scoped>
#home{
  background: #000000;
}
</style>