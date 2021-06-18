// Styles
import './assets/stylus/main.styl'

// ResetCss
import 'reset-css'

import Vue from 'vue'
import App from './app/App.vue'
// import store from './store'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  // store,
  render: h => h(App)
})


// Font Awesome
import { library, dom } from "@fortawesome/fontawesome-svg-core"
import { 
  faCheck, 
  faSignInAlt,
  faBars,
  faTimes,
  faPaperPlane,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faCheck,
  faSignInAlt,
  faBars,
  faTimes,
  faPaperPlane,
  faChevronRight,
);

dom.watch();


