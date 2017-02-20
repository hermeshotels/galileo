import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    { name: 'login', path: '/login', component: load('auth/Login') },
    { name: 'register', path: '/register', component: load('auth/Register') },
    { name: 'recover', path: '/recover', component: load('auth/Recover') },
    {
      name: 'secure',
      path: '/secure',
      component: load('secure/SecureApp'),
      meta: { requiresAuth: true },
      children: [
        {
          name: 'setup',
          path: 'setup',
          component: load('setup/Setup')
        },
        {
          name: 'realtime',
          path: 'realtime',
          component: load('realtime/Realtime')
        },
        {
          name: 'bookingengine',
          path: 'booking-engine',
          component: load('bookingengine/BookingEngine'),
          children: [
            {
              name: 'aspect',
              path: 'aspect',
              component: load('bookingengine/Aspect')
            }
          ]
        }
      ]
    },
    { path: '*', component: load('Error404') } // Not found
  ]
})
