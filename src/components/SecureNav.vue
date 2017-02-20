<template lang="html">
  <div class="erm-secure-nav-wrapper">
    <div class="erm-secure-nav-header">
      {{title}}
    </div>
    <div class="erm-secure-nav">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.erm-secure-nav-wrapper{
  width: 100%;
  .erm-secure-nav-header{
    height: 50px;
    border-bottom: 1px solid #d3d3d3;
  }
}
</style>
