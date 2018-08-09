import Vue from 'vue';
import store from './store';
import router from './router';
import App from './components/App.vue';

// Global components
import Nav from './components/Nav.vue';
import noSSR from 'vue-no-ssr';

Vue.component('v-nav', Nav);
Vue.component('no-ssr', noSSR);

export default new Vue({
    store,
    router,
    render: h => h(App),
});
