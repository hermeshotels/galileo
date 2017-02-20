<template lang="html">
  <div class="erm-room-list-wrapper">
    <room v-for="(room, index) in rooms" :room="room" :index="index"></room>
  </div>
</template>

<script>
import Room from './Room'
export default {
  props: {
    rooms: {
      type: Array,
      required: true
    }
  },
  components: {
    Room
  }
}
</script>

<style lang="css">
</style>
