import Vue from 'vue'
import Router from 'vue-router'

//引入路由页面
import Home from '@/views/home/Home.vue'
//定位
import Location from '@/pages/Home/Location.vue'
//搜索
import Seek from '@/pages/Home/Seek.vue'
//引入首页子页-店铺页
import shops from '@/views/home/shops.vue'
//引入首页子页-猫狗页
import Recommended from '@/views/home/Recommended.vue'
//引入店铺子页-详情页
import Shoppingdetail from '@/views/home/Shoppingdetail.vue'

//shopping界面
import Shopping from '@/views/shopping/Shopping.vue'
import Order from '@/views/shopping/Order.vue'
import Address from '@/views/shopping/Address.vue'
//mine界面
import Mine from '@/views/mine/Mine.vue'
import Pay from '@/views/mine/Pay.vue'
import Mypurse from '@/views/mine/Mypurse.vue'
import Change from '@/views/mine/Change.vue'
//登录页面
import Login from "../views/loginAndregist/login.vue"
//注册页面
import Regist from "../views/loginAndregist/regist.vue"
//分类详情页面
import Classify from "../views/classify/Classify.vue"
//分类详情推荐页面
import Recommend from "../views/classify/recommend.vue"
//分类生活推荐页面
import Life from "../views/classify/life.vue"
//分类详食物荐页面
import Food from "../views/classify/food.vue"
//分类详情护理页面
import Nurse from "../views/classify/nurse.vue"
//分类详情页面
import Dress from "../views/classify/dress.vue"
//分类详情清洁页面
import Clean from "../views/classify/clean.vue"
//分类详情医药页面
import Medicine from "../views/classify/medicine.vue"
//分类详情玩具页面
import Toy from "../views/classify/toy.vue"
//分类详情零食页面
import Snacks from "../views/classify/snacks.vue"
//收藏页面
import Collection from "../views/collection/index.vue"
//收藏商品
import Goods from "../views/collection/goods.vue"
//收藏商店
import Store from "../views/collection/store.vue"
//优惠卷
import Ticket from '../views/mine/ticket.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          name: 'Location',
          path: 'location',
          component: Location
        },
        {
          name: 'Seek',
          path: 'Seek',
          component: Seek,
        },
        {
          path: 'shops',
          component: shops,
          children: [
            {
              path: 'Shoppingdetail/:id',
              component: Shoppingdetail,
            }
          ]
        },
        {
          path: 'Recommended',
          component: Recommended,
        }

      ]
    },

    // {
    //   path: '/shopping',
    //   name:'Shopping',
    //   component:Shopping
    // },
    {
      path: '/shopping',
      alias: '/shopping/:id',
      name: 'Shopping',
      props: true,
      component: Shopping,
      children: [
        {
          name: 'buy-order',
          path: 'order',
          component: Order
        },
        {
          name: 'append-address',
          path: 'address',
          component: Address
        }
      ]
    },


    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      //   children:[
      //     {
      //     path: '/Mypurse/:flag',
      //     name:'Mypurse',
      //     component:Mypurse
      //   }
      // ]
    },
    {
      path: '/Mypurse',
      name: 'Mypurse',
      component: Mypurse
    },
    {
      path: '/Change',
      name: 'Change',
      component: Change
    },
    {
      path: '/Pay/:flag',
      name: 'Pay',
      component: Pay
    },
    {
      path: "/ticket",
      name: "ticket",
      component: Ticket
    },
    {
      path: '/',
      name: 'home',
      component: Home
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
      children: [
        {
          alias: "/",
          path: "foods",
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
          path: "recommend",
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
    },
    {
      path: '**',
      redirect: {name:Home}
    }
  ]
})
