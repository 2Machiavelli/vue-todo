import Vue from "vue"
import Vuex from "vuex"
import Vuetify from "vuetify"

import { createLocalVue } from "@vue/test-utils"


Vue.use(Vuex)
Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'
Vue.config.productionTip = false


const localVue = createLocalVue()


const vuetify = new Vuetify({})

localVue.use(vuetify)