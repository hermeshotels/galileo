<template lang="html">
  <layout>
    <div class="full-height" slot="side">
      <div class="erm-realtime-header header-sec">
        <div class="row">
          <div class="auto">
            <i>comment</i> Sessioni Attive
          </div>
          <div class="pull-right">
            <label>
              <q-toggle
                v-model="chatActive"
              ></q-toggle>
              Chat
              <q-tooltip>
                Mostra o nasconde la chat all'utente
              </q-tooltip>
            </label>
          </div>
        </div>
      </div>
      <session-list></session-list>
    </div>
    <div class="full-height" slot="content">
      <session-detail v-if="currentSession"></session-detail>
      <div class="row text-center items-center justify-center full-height" v-if="!currentSession">
        <div class="erm-no-session width-1of2">
          <img src="../../assets/realtime-session.png" alt="">
          <h4>Nessuna sessione selezionata</h4>
          <p>Non hai selezionato una sessione dalla lista qui a sinistra. Se non visualizzi nessuna sessione
          significa che non ci sono utenti attivi sul tuo BOL. Ti avviseremo non appena ci sarà una richiesta.</p>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Layout from '../secure/Layout'
import SessionList from './SessionList'
import SessionDetail from './SessionDetail'
import fireData from '../../firedata'
export default {
  created () {
    fireData.setup()
    fireData.getChatStatus((status) => {
      this.setChatStatus(status)
    })
  },
  data () {
    return {
      chatActive: false
    }
  },
  watch: {
    chatActive: function (status) {
      fireData.setChatStatus(status)
      this.setChatStatus(status)
    },
    chatStatus: function (status) {
      this.chatActive = status
    }
  },
  computed: {
    ...mapGetters([
      'currentSession',
      'chatStatus'
    ])
  },
  methods: {
    ...mapMutations([
      'setChatStatus'
    ])
  },
  components: {
    Layout,
    SessionList,
    SessionDetail
  }
}
</script>

<style lang="scss">
@import '../base.scss';
.erm-secure-side{
  background: #fafafa;
  border-right: 1px solid #d3d3d3;
  .erm-realtime-header{
    i{
      font-size: 1.3rem;
    }
  }
}
.erm-secure-content{
  background: #FFF;
}
.erm-no-session{
  img{
    width: 200px;
    height: auto;
  }
}
</style>
