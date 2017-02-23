<template>
<div class="erm-ods-wrapper">
  <q-modal ref="odsModal" :content-css="{ padding: '1em', maxWidth: '90vh'}">
    <h5>Nuovo ODS</h5>
    <p>specifica i dettagli dell'ODS per inviare la notifica all'organizzazione.
    </h5>
    <div class="sec-wrapper">
      <div class="row gutter">
        <div class="customer auto">
          <input class="full-width" placeholder="Nome contatto" v-model="odsForm.customerName">
        </div>
        <div class="hotel auto">
          <input class="full-width" placeholder="Nome struttura" v-model="odsForm.hotelName">
        </div>
      </div>
      <div class="row gutter">
        <div class="customer auto">
          <input class="full-width" placeholder="Mail contatto" v-model="odsForm.customerName">
        </div>
        <div class="hotel auto">
          <input class="full-width" placeholder="Telefono contatto" v-model="odsForm.hotelName">
        </div>
      </div>
      <div class="row gutter">
        <div class="customer auto">
          <input class="full-width" placeholder="Responsabile HH" v-model="odsForm.customerName">
        </div>
      </div>
      <div class="row gutter">
        <div class="startDate auto">
          <q-datetime
            v-model="odsForm.startDate"
            type="date"
            class="full-width"
          ></q-datetime>
        </div>
        <div class="endDate auto">
          <q-datetime
            v-model="odsForm.endDate"
            type="date"
            class="full-width"
          ></q-datetime>
        </div>
      </div>
    </div>
    <div class="sec-wrapper">
      <div class="row gutter">
        <div class="Bol auto">
          <strong>Servizi BOL</strong>
        </div>
        <div class="odsOptions auto">
          <label>
            <q-toggle
              v-model="odsForm.bol"
            ></q-toggle>
            BOL
          </label>
        </div>
        <div class="adsOptions auto">
          <label>
            <q-toggle
              v-model="odsForm.cross"
            ></q-toggle>
            Cross
          </label>
        </div>
        <div class="adsOptions auto">
          <label>
            <q-toggle
              v-model="odsForm.los"
            ></q-toggle>
            LOS
          </label>
        </div>
        <div class="adsOptions auto">
          <label>
            <q-toggle
              v-model="odsForm.almost"
            ></q-toggle>
            Almost
          </label>
        </div>
      </div>
    </div>
    <div class="sec-wrapper">
      <div class="row ">
        <div class="Bol auto">
          <strong>Servizi Ermes</strong>
        </div>
        <div class="odsOptions auto">
          <label>
            <q-toggle
              v-model="odsForm.channel"
            ></q-toggle>
            Channel
          </label>
        </div>
        <div class="adsOptions auto">
          <label>
            <q-toggle
              v-model="odsForm.pms"
            ></q-toggle>
            PMS
          </label>
        </div>
        <div class="adsOptions auto">
          <label>
            <q-toggle
              v-model="odsForm.shopper"
            ></q-toggle>
            Shopper
          </label>
        </div>
        <div class="adsOptions auto">
          <label>
            <q-toggle
              v-model="odsForm.gds"
            ></q-toggle>
            GDS
          </label>
        </div>
      </div>
    </div>
    <div class="row">
      <button class="primary" @click="$refs.odsModal.close()">Annulla</button>
    </div>
  </q-modal>
  <div class="sec-wrapper">
    <h3>Ordini di Servizio <br><small>visualizza, inserisci e modifica gli ODS</small></h3>
    <p>Tramite questa sezione potrai inserire un nuovo ODS, una volta completato l'inserimento
      sarà notificato automaticamente a tutta l'organizzazione.
    </p>
    <button class="primary small" @click="$refs.odsModal.open()">
      Crea nuovo ODS
    </button>
  </div>
  <div class="sec-wrapper">
    <q-data-table
      :data="table"
      :config="config"
      :columns="columns"
    >
      <!-- Custom renderer for "message" column -->
      <template slot="col-message" scope="cell">
        <span class="light-paragraph">{{cell.data}}</span>
      </template>
      <!-- Custom renderer for "source" column -->
      <template slot="col-source" scope="cell">
        <span v-if="cell.data === 'Audit'" class="label text-white bg-primary">
          Audit
          <q-tooltip>Some data</q-tooltip>
        </span>
        <span v-else class="label text-white bg-negative">{{cell.data}}</span>
      </template>
      <!-- Custom renderer when user selected one or more rows -->
      <template slot="selection" scope="selection">
        <button class="primary clear">
          <i>edit</i>
        </button>
        <button class="primary clear">
          <i>delete</i>
        </button>
      </template>
    </q-data-table>
  </div>
</div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      odsForm: {
        customerName: '',
        hotelName: '',
        customerContact: '',
        customerPhone: '',
        salesName: '',
        startDate: '',
        endDate: '',
        bol: false,
        cross: false,
        los: false,
        almost: false,
        channel: false,
        pms: false,
        shopper: false,
        gds: false
      },
      table: [
        {
          customer: 'Filippo Fiorentini',
          hotel: 'Masseria Salamina',
          sales: 'David McDermot',
          startDate: new Date(),
          endDate: new Date()
        },
        {
          customer: 'Filippo Fiorentini',
          hotel: 'Masseria Salamina',
          sales: 'David McDermot',
          startDate: new Date(),
          endDate: new Date()
        }
      ],
      config: {
        title: 'Lista Ordini di Servizio',
        responsive: true,
        rowHeight: '50px',
        search: true
      },
      columns: [
        {
          label: 'Cliente',
          field: 'customer',
          filter: true
        },
        {
          label: 'Struttura',
          field: 'hotel',
          filter: true
        },
        {
          label: 'Venditore',
          field: 'sales'
        },
        {
          label: 'Inizio contratto',
          field: 'startDate'
        },
        {
          label: 'Fine contratto',
          field: 'endDate'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@import '../base.scss';
.erm-ods-wrapper{
  padding: 2em;
}
</style>
