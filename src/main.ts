
import App from '@/App.vue'
import Vue from "vue";
import router from '@/router'

//Vue 实例化
new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')
