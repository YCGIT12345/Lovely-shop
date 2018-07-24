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



new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
