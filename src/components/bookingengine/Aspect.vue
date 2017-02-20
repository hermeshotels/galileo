<template lang="html">
  <div class="erm-booking-aspect-wrapper">
    <div class="erm-aspect-header header-sec">
      <div class="row">
        <div class="auto">
          <i>settings_brightness</i> Modifica l'aspetto del Booking Engine
        </div>
      </div>
    </div>

    <div class="erm-aspect-content">
      <div class="sec-wrapper">
        <h3>
          CSS Personalizzato <br>
          <small>imposta regole css personalizzate</small>
        </h3>
        <textarea placeholder="Placeholder" rows="3" class="full-width"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../base.scss';
.erm-aspect-content{
  width: 50%;
}
</style>
