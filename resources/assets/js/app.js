window.Vue = require('vue');

import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './router/index'
// import './plugins/vuetify'

Vue.use(Vuetify)

Vue.component('App', require('./App.vue'))

const app = new Vue({
    router,
    el: '#app'
});
