<template lang="html">
  <div class="erm-layout-wrapper">
    <div class="row full-height">
      <div class="erm-secure-side width-1of4 full-height">
        <slot name="side"></slot>
      </div>
      <div class="erm-secure-content full-height width-3of4">
        <slot class="full-height" name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="scss">
.erm-layout-wrapper{
  overflow: hidden;
  height: calc(100% - 50px);
  .erm-secure-side{
    background: #fafafa;
    border-right: 1px solid #d3d3d3;
    overflow: auto;
  }
  .erm-secure-content{
    background: #FFF;
    overflow: auto;
  }
}
</style>
