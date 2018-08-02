import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'



import Tabs from './common/Plugin/Tabs.vue'
Vue.component("my-tabs",Tabs);
import MyCentent from './common/Plugin/MyCentent.vue'
Vue.component("my-centent",MyCentent);
import Appcontent from './common/module/Appcontent.vue'
Vue.component("app-content",Appcontent)


//轮播视图组件
import swiperContainer from './common/Plugin/mySwiper/swiperContainer.vue'
import swiperSlide from './common/Plugin/mySwiper/swiperSlide.vue'
Vue.component('swiper-container', swiperContainer);
Vue.component('swiper-slide', swiperSlide);


//价钱过滤器
import {priceControl} from './filter/priceFilter.js'
Vue.filter('priceControl',priceControl);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
