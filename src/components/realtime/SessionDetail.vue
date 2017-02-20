<template lang="html">
  <div class="erm-session-detail full-height">
    <div class="header-sec">
      <div class="row">
        <div class="auto">
          <i>info</i> Dettaglio della Sessione
        </div>
      </div>
    </div>
    <div class="row row-content">
      <div class="erm-session-details auto">
        <div class="sec-title">
          Filtri di ricerca <br>
          <span class="sub">parametri di ricerca utente</span>
        </div>
        <div class="row erm-filters wrap sec-wrapper">
          <div v-if="!session.filters || !session.filters.arrival" class="erm-no-data full-width text-orange-8">
            <i>warning</i> L'utente non ha ancora specificato nessun parametro di ricerca.
          </div>
          <div class="filters full-width row" v-if="session.filters && session.filters.arrival">
            <div class="erm-item auto">
              <div class="erm-label">
                Arrivo
              </div>
              <div class="erm-value">
                {{date(session.filters.arrival)}}
              </div>
            </div>
            <div class="erm-item auto">
              <div class="erm-label">
                Partenza
              </div>
              <div class="erm-value">
                {{date(session.filters.departure)}}
              </div>
            </div>
            <div class="erm-item auto">
              <div class="erm-label">
                Ospiti
              </div>
              <div class="erm-value">
                2 Ad, 0 Bam, 1 Camera
              </div>
            </div>
          </div>
        </div>
        <div class="sec-title">
          Elenco camere e tariffe <br>
          <span class="sub">elenco delle offerte attualmente visualizzate all'utente</span>
        </div>
        <div class="sec-wrapper">
          <div v-if="!session.rooms" class="erm-no-filter-data full-width text-orange-8">
            <i>warning</i> L'utente non ha ancora ricevuto un elenco di camere e tariffe.
          </div>
          <room-list v-if="session.rooms && session.rooms.length > 0" :rooms="session.rooms"></room-list>
        </div>
      </div>
      <div class="erm-session-chat width-2of5">
        <chat :session="currentSession"></chat>
      </div>
    </div>
  </div>
</template>

<script>
import Chat from './Chat'
import moment from 'moment'
import RoomList from './RoomList'
import {mapGetters, mapMutations} from 'vuex'
import fireData from '../../firedata'
export default {
  computed: {
    ...mapGetters([
      'currentSession'
    ])
  },
  mounted () {
    this.$firebaseRefs.session.on('child_removed', (data) => {
      // Se la sessione si disconette o va in timeout, resetto il valore
      this.setCurrentSession(null)
    })
  },
  methods: {
    ...mapMutations([
      'setCurrentSession'
    ]),
    date (value) {
      return moment(value).format('MM/DD/YYYY')
    }
  },
  firebase () {
    return {
      session: {
        source: fireData.getSessionRef(this.currentSession),
        asObject: true
      }
    }
  },
  components: {
    Chat,
    RoomList
  }
}
</script>

<style lang="scss">
.erm-session-detail{
  overflow: hidden;
  .erm-session-details{
    padding: 1.5em;
    overflow: auto;
    .erm-filters{
      .erm-item{
        .erm-label{
          font-weight: 500;
          font-size: 0.850rem;
          margin-bottom: 3px;
        }
        .erm-value{
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>
