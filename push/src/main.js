import Vue from 'vue'
import Main from './Main.vue'
// import Login from './Login.vue'
// import Registration from './Registration.vue'
// import Order from './Order.vue'
//import Payment from './Payment.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import BootstrapVue from "bootstrap-vue"

Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  render: h => h(Main),
}).$mount('#app')