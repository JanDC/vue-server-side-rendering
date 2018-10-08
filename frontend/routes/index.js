import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const register = () => import('../pages/register.vue' /* webpackChunkName: "pages/register" */).then(m => m.default || m);
const login = () => import('../pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m);
const index = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m);

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'index',
        component: index,
      },
      {
        path: '/login',
        name: 'login',
        component: login,
      },
      {
        path: '/register',
        name: 'register',
        component: register,
      }
    ]
  })
}
