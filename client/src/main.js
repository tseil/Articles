import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2)
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
