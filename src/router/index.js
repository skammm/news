import Vue from 'vue'
import VueRouter from 'vue-router'




const Home = () => import('../views/home/Home.vue');
const Subscribe= () => import('../views/subscribe/Subscribe.vue');
const LoginA = () => import('../views/admin/Login.vue');
const LoginS = () => import('../views/staff/Login.vue');
const Admin = () => import('../views/admin/Admin.vue');
const UserAdd = () => import('../views/admin/children/userManage/UserAdd.vue');
const Notice = () => import('../views/notice/Notice.vue')
const NoticeAdd = () => import('../views/admin/children/noticeManage/NoticeAdd.vue')
const NoticeOperate = () => import('../views/admin/children/noticeManage/NoticeOperate.vue')
const NoticeUpdate = () => import('../views/admin/children/noticeManage/NoticeUpdate.vue')
const UserOperate = () => import('../views/admin/children/userManage/UserOperate.vue')
const UserUpdate = () => import('../views/admin/children/userManage/UserUpdate.vue')
const TypeAdd = () => import('../views/admin/children/typeManage/TypeAdd')
const TypeOperate = () => import('../views/admin/children/typeManage/TypeOperate')
const TypeUpdate = () => import('../views/admin/children/typeManage/TypeUpdate')
const ProductAdd = () => import('../views/admin/children/productManage/ProductAdd')
const ProductOperate = () => import('../views/admin/children/productManage/ProductOperate')
const ProductUpdate = () => import('../views/admin/children/productManage/ProductUpdate')
const MySubscribe = () => import('../views/subscribe/MySubscribe.vue')
const Chart = () => import('../views/admin/children/chart/Chart')
Vue.use(VueRouter)
//配置路由映射关系
const routes = [
  //默认路由
  {
    path:'',
    redirect:'/home',  
  },
  {
    path:'/home',
    component:Home,
    meta:{isPublic:true}
  },
  {
    path:'/LoginA',
    component:LoginA,
    meta:{isPublic:true}
  },
  {
    path:'/loginS',
    component:LoginS
  },
  {
    path:'/admin/:id',
    component:Admin,
    children: [
      {
        path: 'userAdd',
        component: UserAdd
      },
      {
        path:'messageAdd',
        component:NoticeAdd
      },
      {
        path:'noticeOperate',
        component:NoticeOperate
      },
      {
        path:'noticeUpdate/:iid',
        component:NoticeUpdate
      },
      {
        path:'userOperate',
        component:UserOperate
      },
      {
        path:'userUpdate/:userId',
        component:UserUpdate
      },
      {
        path:'typeAdd',
        component:TypeAdd
      },
      {
        path:'typeOperate',
        component:TypeOperate
      },
      {
        path:'typeUpdate/:type',
        component:TypeUpdate
      },
      {
        path:'productAdd',
        component:ProductAdd
      },
      {
        path:'productOperate',
        component:ProductOperate
      },
      {
        path:'productUpdate/:product',
        component:ProductUpdate
      },
      {
        path:'chart',
        component:Chart
      }
      
    ]
  },
  {
    path:'/notice',
    component:Notice
  },
  {
    path:'/subscribe/:sub',
    component:Subscribe
  },
  {
    path:'/mysubscribe/:type',
    component:MySubscribe
  },
  
  
]


const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
})

 router.beforeEach((to,from,next)=>{
   if(!to.meta.isPublic && !localStorage.getItem('token')){
     return next('/loginA')
   }
   next()
 })
export default router
