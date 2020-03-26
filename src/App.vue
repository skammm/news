<template>
  <div id="app">
    <main-tab-bar v-if="routerAlive"/>
    <router-view></router-view>
    <home-footer></home-footer>
  </div>

</template>
<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
import HomeFooter from 'views/home/children/HomeFooter'
export default {
  name:'App',
  data(){
    return{
      routerAlive:true
    }
  },
  components:{
    MainTabBar,
    HomeFooter
  },
  provide(){
    return {
      routerRefresh: this.routerRefresh
    }
  },
  methods:{
    routerRefresh(){
      this.routerAlive = false;
      this.$nextTick(()=>{
          this.routerAlive = true;
      });
    },


},
}
</script>
<style>
@import './assets/css/normalize.css';
</style>
