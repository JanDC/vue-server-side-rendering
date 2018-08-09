import Vue from 'vue';
import store from './store';
import router from './router';
import App from './components/App.vue';

// Global components
import Nav from './components/Nav.vue'
Vue.component('v-nav', Nav);

export default new Vue({
    store,
    router,
    render: h => h(App),
});
