<template lang="html">
  <layout>
    <div class="full-height" slot="side">
      <div class="header-sec">
        <div class="row">
          <div class="auto">
            <i>search</i> Booking Engine
          </div>
        </div>
      </div>
      <div class="list">
        <div class="item item-link">
          <div class="item-content">
            <i>settings_brightness</i> Aspetto
          </div>
        </div>
        <div class="item item-link">
          <div class="item-content">
            <i>multiline_chart</i> Analtica
          </div>
        </div>
      </div>
    </div>
    <div class="full-height erm-booking-settings" slot="content">
      <router-view></router-view>
    </div>
  </layout>
</template>

<script>
import Layout from '../secure/Layout'
export default {
  components: {
    Layout
  }
}
</script>

<style lang="scss">
@import '../base.scss';
.erm-booking-settings{
}
.list{
  border: 0;
  .item{
    i{
      margin-right: 10px;
    }
  }
}
.list > .item:first-child, .list > .q-collapsible:first-child{
  margin-top: 0;
}
</style>
