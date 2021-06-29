import "reset-css"
import Vue from "vue"
import App from "./App.vue"
// @ts-ignore
import store from "./store/index.ts"
// @ts-ignore
import vuetify from "./plugins/vuetify.ts"


Vue.config.productionTip = false


new Vue({
	el: "#app",
	store,
	vuetify,
	render: (h: any) => h(App)
})