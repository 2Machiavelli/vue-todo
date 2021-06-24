import Vue from "vue"
import Vuetify from "vuetify"

import { createLocalVue } from "@vue/test-utils"


Vue.use(Vuetify)
Vue.config.productionTip = false


const localVue = createLocalVue()


const vuetify = new Vuetify({})

localVue.use(vuetify)