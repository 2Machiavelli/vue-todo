import Vue from "vue"
import Vuex from "vuex"
import VuexPersist from "vuex-persist"
// @ts-ignore
import Todos from "./modules/Todos.ts"

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