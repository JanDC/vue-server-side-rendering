import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function load (path) {
  return () => import(/* webpackChunkName: "[request]" */ `../${path}.vue`).then(m => m.default || m);
}

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: "/",
      },
      {
        path: '/:lang',
        name: 'index',
        component: load('pages/index'),
      },
      {
        path: '/:lang/login',
        name: 'login',
        component: load('pages/Account/loginPage'),
      },
      {
        path: '/:lang/register',
        name: 'register',
        component: load('pages/Account/registerPage'),
      }
    ]
  })
}
