import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import About from './views/mine/About.vue'
import Login from "./views/loginAndregist/login.vue"
import Regist from "./views/loginAndregist/regist.vue"
import Classify from "./views/classify/index.vue"
import Recommend from "./views/classify/recommend.vue"
import Life from "./views/classify/life.vue"
import Food from "./views/classify/food.vue"
import Nurse from "./views/classify/nurse.vue"
import Dress from "./views/classify/dress.vue"
import Clean from "./views/classify/clean.vue"
import Medicine from "./views/classify/medicine.vue"
import Toy from "./views/classify/toy.vue"
import Snacks from "./views/classify/snacks.vue"
import Collection from "./views/collection/index.vue"
import Goods from "./views/collection/goods.vue"
import Store from "./views/collection/store.vue"
import Ticket from './views/mine/ticket.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/ticket",
      name:"ticket",
      component:Ticket
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/regist",
      name: "regist",
      component: Regist
    },
    {
      path: "/collection",
      name: "collection",
      component: Collection,
      children:[
        {
          alias: "/",
          path:"foods",
          name: "foods-c",
          component: Goods,
        },
        {
          path: "store",
          name: "store-c",
          component: Store,
        }
      ]
    },
    {
      path: "/classify",
      name: "classify",
      component: Classify,
      children: [
        {
          alias: "/",
          path:"recommend",
          name: "recommend-a",
          component: Recommend,
          props: true
        },
        {
          path: "life",
          name: "life-a",
          component: Life,
          props: true
        },
        {
          path: "food",
          name: "food-a",
          component: Food,
          props: true
        },
        {
          path: "nurse",
          name: "nurse-a",
          component: Nurse,
          props: true
        },
        {
          path: "dress",
          name: "dress-a",
          component: Dress,
          props: true
        },
        {
          path: "clean",
          name: "clean-a",
          component: Clean,
          props: true
        },
        {
          path: "medicine",
          name: "medicine-a",
          component: Medicine,
          props: true
        },
        {
          path: "toy",
          name: "toy-a",
          component: Toy,
          props: true
        },
        {
          path: "snacks",
          name: "snacks-a",
          component: Snacks,
          props: true
        }
      ]
    }
    
  ]
})
