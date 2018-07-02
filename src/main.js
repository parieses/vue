// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import router from './router';
import VueRouter from 'vue-router';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import 'common/stylus/index.styl';
import VueResource from 'vue-resource';
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
    { path: '/', redirect: '/goods' }, // 默认就跳转此页面
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller}
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
