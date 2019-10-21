import Vue from "vue";
import App from "./App.vue";
// eslint-disable-next-line no-unused-vars
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
Vue.config.productionTip = false;
Vue.use(ElementUI);
import router from './route';
new Vue({
    render: h => h(App),
    router
}).$mount("#app");
