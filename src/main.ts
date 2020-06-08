import Vue from 'vue'
import App from './App.vue'
import globalStore from './store/global'
import store from './store/index'
import { getModule } from 'vuex-module-decorators'

Vue.config.productionTip = false

Vue.prototype.$global = getModule(globalStore);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
