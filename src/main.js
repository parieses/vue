// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import router from './router';
import VueRouter from 'vue-router';
import goods from './components/goods/goods';

Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
    {path: '/goods', component: goods}
];
const router = new VueRouter({
    routes
});
let vRouter = new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
Vue.use({
    vRouter
});
