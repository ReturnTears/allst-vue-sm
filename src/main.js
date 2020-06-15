// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueiClient from '@supermap/vue-iclient-mapboxgl'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueiClient, {locale: VueiClient.lang.en})
Vue.use(VueI18n)

const messages = {
  en: {
    message: {hello: 'hello'}
  },
  zh: {
    message: {hello: '你好'}
  }
}

const i18n = new VueI18n({
  locale: 'en',
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>',
  i18n
}).$mount('#app')
