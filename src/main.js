// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import VueFire from 'vuefire'
import Quasar from 'quasar'
import router from './router'
import store from './store'
import fireData from './firedata'
import VueCurrency from './filters/currency.js'

Vue.use(Quasar) // Install Quasar Framework
Vue.use(VueFire)
Vue.use(VueCurrency)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    fireData.getAuthStatus((error, success) => {
      if (error) {
        next({
          name: 'login'
        })
      }
      else {
        next()
      }
    })
  }
  else {
    next()
  }
})

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  })
})
