import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Router from 'vue-router'
import axios from 'axios'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

import 'bootstrap/dist/css/bootstrap.min.css'

import {Input,Select,Option,Button,Carousel,
  CarouselItem,Menu,MenuItem,Row,Col,
  MenuItemGroup,Submenu,Form,FormItem,
  Message,Table,TableColumn,Pagination,Upload,
  Image,Breadcrumb, BreadcrumbItem} from 'element-ui'
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Menu);
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Message)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Upload)
Vue.use(Image)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

Vue.config.productionTip = false


Vue.use(require('vue-moment'));
axios.defaults.baseURL = '/api' 
Vue.prototype.$message = Message;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
