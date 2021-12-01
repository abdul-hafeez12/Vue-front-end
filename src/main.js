import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, FormPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(FormPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
