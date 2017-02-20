<template lang="html">
  <div class="erm-session-list-wrapper">
    <session v-for="(session, index) in sessions" v-bind:class="{active: session['.key'] === currentSession}" :session="session"></session>
  </div>
</template>

<script>
import Session from './Session'
import fireData from '../../firedata'
import { mapGetters } from 'vuex'
import Notify from 'notifyjs'
let newUserNot = new Notify('Nuovo utente!', {
  body: 'Un nuovo utente si è connesso al bol',
  icon: 'http://www.hermeshotels.it/wp-content/uploads/2014/10/logoHermes.png'
})
export default {
  mounted () {
    if (Notify.needsPermission && Notify.isSupported()) {
      Notify.requestPermission()
    }
  },
  created () {
    this.$firebaseRefs.sessions.on('child_added', function (data) {
      newUserNot.show()
    })
  },
  data () {
    return {
      currentIndex: null
    }
  },
  computed: {
    ...mapGetters([
      'currentSession'
    ])
  },
  methods: {
    setSession (index) {
      this.currentIndex = index
    }
  },
  firebase () {
    return {
      sessions: fireData.sessionRef
    }
  },
  components: {
    Session
  }
}
</script>

<style lang="scss">
</style>
