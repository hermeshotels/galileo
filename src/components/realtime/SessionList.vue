<template lang="html">
  <div class="erm-session-list-wrapper">
    <session v-for="(session, index) in sessions" v-bind:class="{active: session['.key'] === currentSession}" :session="session"></session>
  </div>
</template>

<script>
import Session from './Session'
import fireData from '../../firedata'
import { mapGetters } from 'vuex'
export default {
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
      console.log(index)
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
