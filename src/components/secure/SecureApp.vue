<template lang="html">
  <q-layout class="erm-secure-layout full-heigh">
    <div slot="header" class="toolbar">
      <button @click="$refs.leftDrawer.open()">
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="1">
        ErmesHotels
      </q-toolbar-title>
    </div>

    <q-drawer ref="leftDrawer" swipe-only>
      <div class="erm-drawer-header">
        <div class="row items-center">
          <div class="erm-header-logo width-1of4">
            <img src="../../assets/logo.svg" alt="">
          </div>
          <div class="erm-header-text auto">
            ErmesHotels <br>
            <span class="erm-version">master-v0.8rc32</span>
          </div>
        </div>
      </div>
      <div class="list no-border platform-delimiter">
          <div class="list-label">Gestione</div>
          <q-drawer-link icon="attach_money" to="/secure/manage">
            Sales
          </q-drawer-link>
          <!-- <q-drawer-link icon="hotel" to="/showcase/layout/tabs">
            Booking Engine
          </q-drawer-link>
          <q-drawer-link icon="date_range" to="/showcase/layout/drawer">
            Gestione
          </q-drawer-link>
          <q-drawer-link icon="room_service" to="/showcase/layout/drawer">
            Prenotazioni
          </q-drawer-link>
          <q-drawer-link icon="help" to="/showcase/layout/drawer">
            Supporto
          </q-drawer-link> -->
          <!-- <div class="list-label">Analisi</div>
          <q-drawer-link icon="multiline_chart" to="/showcase/layout/drawer">
            Report
          </q-drawer-link> -->
          <div class="list-label">Booking Engine</div>
          <q-drawer-link icon="comment" to="/secure/realtime">
            Realtime
          </q-drawer-link>
      </div>
    </q-drawer>
    <router-view class="layout-view full-height"></router-view>
  </q-layout>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.erm-secure-layout{
  .erm-header-item{
    margin-right: 20px;
    &:last-child{
      margin-right: 0;
      font-size: 0.9rem;
    }
  }
  .erm-drawer-header{
    height: 70px;
    border-bottom: 1px solid #ececec;
    .erm-header-logo{
      height: 70px;
      line-height: 70px;
      text-align: center;
      img{
        height: 60%;
        vertical-align: middle;
        width: auto;
      }
    }
    .erm-header-text{
      font-weight: 600;
      .erm-version{
        font-weight: 400;
      }
    }
  }
}
</style>
