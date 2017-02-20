<template lang="html">
  <div class="erm-room-wrapper">
    <white-card>
      <div class="row erm-room-main items-center">
        <div class="erm-room-name width-1of2">
          <i class="vertical-middle selected text-light-green-7" v-if="room.selected">check_circle</i> {{room.name}} <br>
          <small>
            <a href="#" class="primary small" @click.prevent="toggleMore()">
              <i>more_horiz</i> Mostra altre tariffe ({{room.rates.length}})
            </a>
          </small>
        </div>
        <div class="erm-room-price auto">
          {{room.rates[0].price | currency}}
        </div>
        <div class="erm-room-actions auto">
          <button class="primary clear" @click="editRate(room.rates[0], 0)">
            <i>edit</i>
          </button>
        </div>
      </div>
      <div class="erm-room-more-rates" v-show="moreOpen">
        <div class="erm-room-rate row items-center" v-for="(rate, rateIdx) in room.rates">
          <div class="erm-room-name width-1of2">
            {{rate.name}} <br>
          </div>
          <div class="erm-room-price auto">
            {{rate.price | currency}}
          </div>
          <div class="erm-room-actions auto">
            <button class="primary clear" @click="editRate(rate, rateIdx)">
              <i>edit</i>
            </button>
          </div>
        </div>
      </div>
      <q-modal ref="rateModal" :content-css="{padding: '30px', maxWidth: '35vw'}">
        <h5>Override della tariffa</h5>
        <p>L'override della tariffa imposta un nuovo prezzo per la tariffa selezionata.
        L'utente potrà quindi prenotare la tariffa modificata al nuovo valore.</p>
        <div class="row gutter">
          <div class="erm-override-value auto">
            <input class="full-width" v-model="newPrice" placeholder="Nuovo importo o sconto">
          </div>
          <div class="erm-override-type auto">
            <q-select
              type="list"
              v-model="typeSelected"
              :options="selectOptions"
              class="full-width"
            ></q-select>
          </div>
        </div>
        <div class="row gutter justify-between">
          <div>
            <button class="primary" @click="setNewRate()">
              Invia nuovo prezzo
            </button>
          </div>
          <div class="pull-right">
            <button class="red" @click="$refs.rateModal.close()">
              Annulla
            </button>
          </div>
        </div>
      </q-modal>
    </white-card>
  </div>
</template>

<script>
import { Loading } from 'quasar'
import WhiteCard from '../WhiteCard'
import { mapGetters } from 'vuex'
import fireData from '../../firedata'
export default {
  data () {
    return {
      moreOpen: false,
      currentRate: null,
      currentRateIdx: null,
      typeSelected: null,
      newPrice: 0,
      selectOptions: [
        {
          label: 'Prezzo',
          value: 'price'
        },
        {
          label: 'Percentuale',
          value: 'percent'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'currentSession'
    ])
  },
  props: {
    room: {
      type: Object,
      required: true
    },
    index: {
      required: true
    }
  },
  components: {
    WhiteCard
  },
  methods: {
    editRate (rate, rateIdx) {
      this.currentRate = rate
      this.currentRateIdx = rateIdx
      this.$refs.rateModal.open()
    },
    setNewRate () {
      Loading.show()
      fireData.setNewRatePrice(this.currentSession, this.index, this.currentRateIdx, this.newPrice, this.currentRate.price, this.typeSelected, (completed) => {
        Loading.hide()
        this.$refs.rateModal.close()
      })
    },
    toggleMore () {
      this.moreOpen = !this.moreOpen
    }
  }
}
</script>

<style lang="scss">
.erm-room-rate{
}
.erm-room-actions{
  text-align: center;
}
.erm-room-price{
  font-weight: 600;
}
.erm-room-main{
  padding: 0.8em;
}
.erm-room-more-rates{
  background: #fafafa;
  padding: 8px;
  border-radius: 3px;
}
</style>
