window.Vue = require('vue');
import './bootstrap'
import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './router/index'
import VueSimpleMDE from 'vue-simplemde'
// import './plugins/vuetify'

Vue.use(Vuetify)
Vue.use(VueSimpleMDE)

import User from './models/User'
window.User = User

window.EventBus = new Vue()

Vue.component('App', require('./App.vue'))

const app = new Vue({
    router,
    el: '#app'
});
