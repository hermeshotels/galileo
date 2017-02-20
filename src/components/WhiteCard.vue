<template lang="html">
  <div class="erm-white-card-wrapper" v-bind:style="contentStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    contentStyle: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.erm-white-card-wrapper{
    -webkit-transition: all cubic-bezier(0.4,0.0,0.2,1) 0.2s;
    transition: all cubic-bezier(0.4,0.0,0.2,1) 0.2s;
    display: block;
    margin-bottom: 15px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12);
    border: 1.1px solid #e7e7e7;
    border-radius: 2px;
    background: #fff;
}
</style>
