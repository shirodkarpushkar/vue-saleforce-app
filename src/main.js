import Vue from 'vue'
import App from './App'
import router from '@router'
import store from '@state/store'

import 'bootstrap'
import './globalComponents'
import vuetify from './plugins/vuetify';
// import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'



// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production'


const app = new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App)
}).$mount('#app')
