import 'reset-css'
import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import vuetify from './plugins/vuetify.js'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  store,
  vuetify,
  render: h => h(App)
})


