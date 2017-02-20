<template lang="html">
  <div class="erm-session-wrapper cursor-pointer" @click="setCurrentSession(session['.key'])">
    <div class="row items-center full-height">
      <div class="erm-session-avatar width-1of5">
        <i class="vertical-middle">account_circle</i>
      </div>
      <div class="erm-session-detail auto">
        <div class="erm-user-name">
          Utente anonimo
        </div>
        <div class="erm-current-step">
          {{session.status}}
        </div>
        <div class="erm-session-time">
          {{startTime}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapMutations } from 'vuex'
export default {
  props: {
    session: {
      type: Object,
      required: true
    }
  },
  computed: {
    startTime () {
      return moment(this.session.startTime).format('HH:MM')
    }
  },
  methods: {
    ...mapMutations([
      'setCurrentSession'
    ])
  }
}
</script>

<style lang="scss">
.erm-session-wrapper{
  height: 60px;
  border-bottom: 1px solid #d3d3d3;
  transition: all 0.5s ease-in-out;
  background: inherit;
  position: relative;
  &.active{
    background: #d3e0f6;
    color: #3a78e6;
  }
  &:hover{
    background: #e8e8e8;
  }
  .erm-session-avatar{
    text-align: center;
    i{
      font-size: 25px;
    }
  }
  .erm-session-detail{
    .erm-user-name{

    }
    .erm-current-step{
      font-size: 0.8rem;
    }
    .erm-session-time{
      font-size: 0.8rem;
      position: absolute;
      top: 50%;
      margin-top: -6px;
      right: 10px;
    }
  }
}
</style>
