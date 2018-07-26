import Vue from 'vue'
import Router from 'vue-router'

//引入路由页面
import Home from '@/views/home/Home.vue'
import Classify from '@/views/classify/Classify.vue'
import Shopping from '@/views/shopping/Shopping.vue'
import Mine from '@/views/mine/Mine.vue'
import Pay from '@/views/mine/Pay.vue'

Vue.use(Router)

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
      name:'Shopping',
      component:Shopping
    },
    {
      path: '/mine',
      name:'Mine',
      component:Mine
    },
    {
      path: '/Pay/:flag',
      name:'Pay',
      component:Pay
    },
    {
      path:'**',
      component: Home
    }
  ]
})
