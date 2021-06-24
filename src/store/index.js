import Vue from "vue"
import Vuex from "vuex"
import VuexPersist from "vuex-persist"

import Todos from "./modules/Todos.js"

const vuexPersist = new VuexPersist({
	storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		todos: Todos
	},
	plugins: [vuexPersist.plugin]
})