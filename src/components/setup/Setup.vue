<template lang="html">
  <div class="row full-height">
    <div class="erm-secure-side width-1of4 full-height">
      <secure-nav title="Setup"></secure-nav>
    </div>
    <div class="erm-secure-content auto">
      ciao
    </div>
  </div>
</template>

<script>
import SecureNav from '../SecureNav'
export default {
  components: {
    SecureNav
  }
}
</script>

<style lang="scss">
.erm-secure-side{
  background: #fafafa;
  border-right: 1px solid #d3d3d3;
}
.erm-secure-content{
  background: #FFF;
}
</style>
