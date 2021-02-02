import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
//adding bootstrap to project
import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
//adding fontawesome to project
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
export const vuejs = new Vue();
new Vue({
  render: h => h(App),
}).$mount('#app')
