import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugilus/vant'
// 移动端适配
import 'lib-flexible/flexible'
import "@/assets/icon/iconfont.css"
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')