<template lang="html">
  <div class="erm-chat-wrapper full-height">
    <div class="erm-disabled-overlay" v-if="chatStatus === false">
      <div class="row full-height items-center justify-center">
        <div class="width-4of5">
          <p>
            <i>chat</i>
            La chat è disabilitata, <a href="#" @click.prevent="setChatStatus(true)">abilitala</a> per iniziare la conversazione.
            <br><small>una volta abilitata la chat sarà visibile per tutti gli utenti connessi al BOL</small>
          </p>
        </div>
      </div>
    </div>
    <div class="column content-end erm-chat-messages">
      <div class="erm-message full-width"
        v-for="message in sessionChat"
        v-bind:class="{ me: message.from === 'back', him: message.from === 'front' }">
        <span>
          {{message.message}}
          <div class="time">
            {{formatTime(messageTime)}}
          </div>
        </span>
      </div>
    </div>
    <div class="erm-chat-message-wrapper">
      <div class="row full-height full-width items-center">
        <div class="auto">
          <textarea class="full-width no-border" v-model="message"></textarea>
        </div>
        <div class="width-1of5 erm-send-button">
          <button class="circular primary small" @click="sendMessage"><i>send</i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import fireData from '../../firedata'
import moment from 'moment'
export default {
  firebase () {
    return {
      sessionChat: fireData.getSessionChat(this.session)
    }
  },
  props: {
    session: {
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'chatStatus'
    ])
  },
  data () {
    return {
      message: ''
    }
  },
  methods: {
    ...mapMutations([
      'setChatStatus'
    ]),
    formatTime (time) {
      return moment(time).format('HH:MM')
    },
    sendMessage () {
      console.log(this.session)
      this.$firebaseRefs.sessionChat.push({
        message: this.message,
        from: 'back',
        time: new Date()
      })
      this.message = ''
    }
  }
}
</script>

<style lang="scss">
@import '../base.scss';
.erm-chat-wrapper{
  background-image: url('./../../assets/chatbg.png');
  background-size: cover;
  background-position: center;
  border-left: 1px solid #d3d3d3;
  background-size: 50%;
  overflow: hidden;
  position: relative;
  .erm-disabled-overlay{
    position: absolute;
    top: 0;
    left: 0;
    background: #f5f5f5;
    height: 100%;
    width: 100%;
    z-index: 5;
    color: #FFF;
    p{
      text-align: center;
    }
    i{
      font-size: 60px;
      display: block;
      margin-bottom: 30px;
    }
  }
  .erm-chat-messages{
    padding: 1em;
    height: calc(100% - 70px);
    overflow: auto;
    box-sizing: border-box;
    .erm-message{
      margin-bottom: 10px;
      .time{
        font-size: 0.6rem;
        position: absolute;
        bottom: 5px;
        right: 10px;
      }
      &.me{
        span{
          position: relative;
          float: right;
          max-width: 90%;
          background: #FFF;
          padding: 0.4em;
          padding-left: 1em;
          padding-right: 2.5em;
          min-height: 40px;
          border-radius: 20px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }
      }
      &.him{
        span{
          position: relative;
          max-width: 90%;
          float: left;
          background: #3b78e7;
          color: #FFF;
          padding: 0.4em;
          padding-left: 1em;
          padding-right: 2.5em;
          min-height: 40px;
          border-radius: 20px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
  .erm-chat-message-wrapper{
    padding: 1em;
    height: 70px;
    background: #FFF;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    .erm-send-button{
      text-align: center;
    }
  }
}
</style>
