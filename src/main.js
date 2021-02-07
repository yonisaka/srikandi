import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueToast from 'vue-toast-notification';
import VueSession from 'vue-session'
import 'vue-toast-notification/dist/theme-default.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
// import VueCoreVideoPlayer from 'vue-core-video-player'
// import vuetify from './plugins/vuetify';
// import 'roboto-fontface/css/roboto/roboto-fontface.css'
// import '@mdi/font/css/materialdesignicons.css'

Vue.use(require('vue-cookie'));
Vue.use(require('vue-moment'));
Vue.use(VueSession);
Vue.use(VueToast);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Vue.use(VueCoreVideoPlayer)

Vue.config.productionTip = false

new Vue({
  router,
  // vuetify,
  render: h => h(App)
}).$mount('#app')
