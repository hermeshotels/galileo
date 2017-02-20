<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-ajax-bar></q-ajax-bar>
    <router-view></router-view>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {}
</script>

<style lang="scss">
html, body{
  height: 100%;
  background: #f5f5f5;
  color: #5b5b5b;
  font-size: 15px;
}
#q-app{
  height: 100%;
}
.layout-content{
  height: 100%!important;
}
.erm-form{
  .erm-form-item{
    margin-bottom: 10px;
  }
}
::-webkit-scrollbar {
    width: 12px;
    height: 12px;
}

::-webkit-scrollbar-button {
    height: 0;
    width: 0;
}
::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0,0,0,0.1);
    -webkit-box-shadow: inset rgba(0,0,0,0.1)
}
::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.1);
    background-clip: border-box;
    border: solid transparent;
    border-width: 1px;
    min-height: 28px;
    padding: 0 0 0;
    box-shadow: inset 1px 1px 0 rgba(0,0,0,0.1), inset 0 -1px 0 rgba(0,0,0,0.07);
}
</style>
