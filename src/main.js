/*!
=========================================================
* ERP Dashboard - v1.0.0
=========================================================
* Product Page: https://www.saepudin.xyz/
* Copyright 2019 Saepudin Ibn Basri (https://www.saepudin.xyz/)
* Licensed under MIT (https://github.com/ibnbasri20/ReWrite-Admin/blob/master/LICENSE)
* Coded by Saepudin Ibn Basri

=========================================================
* Harap Sertakan Nama Pembuat & web pembuat dan izin terlebih dahulu jika ingin merubah hak cipta .
*/

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './assets/styles.css'
import './assets/icon.css'
import Components from './pulgins/index'
import InstantSearch from 'vue-instantsearch';

Vue.use(InstantSearch);
Vue.config.productionTip = false
Vue.use(Components)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
