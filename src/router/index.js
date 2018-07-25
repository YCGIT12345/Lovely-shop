import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

//引入路由页面
import Home from '@/views/home/Home.vue'
import Classify from '@/views/classify/Classify.vue'
import Shopping from '@/views/shopping/Shopping.vue'
import Order from '@/views/shopping/Order.vue'
import Mine from '@/views/mine/Mine.vue'



export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/classify',
      name:'Classify',
      component:Classify
    },
    {
      path: '/shopping',
      alias:'/shopping/:id',
      name:'Shopping',
      props:true,
      component:Shopping,
      children:[
        {
          name:'buy-order',
          path:'order',
          component:Order
        }
      ]
    },
    {
      path: '/mine',
      name:'Mine',
      component:Mine
    },
    {
      path:'**',
      component: Home
    }
  ]
})
