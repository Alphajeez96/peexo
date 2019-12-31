import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './custom.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import FullCalendar from 'vue-full-calendar'
// src/main.js




Vue.use(FullCalendar)

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
 
  render: h => h(App)
}).$mount('#app')
