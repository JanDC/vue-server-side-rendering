import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Test from './components/Test.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/test', name: 'test', component: Test },
];

export default new VueRouter({
    mode: 'history',
    routes,
});
