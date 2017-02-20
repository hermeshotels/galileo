<template lang="html">
  <div class="erm-login-wrapper full-height">
    <div class="column full-height items-center justify-center">
      <div class="erm-login-logo">
        <img src="../../assets/logo.svg" alt="ErmesHotels">
        <h3>
          ErmesHotels <br>
          <small>master-v0.8rc32</small>
        </h3>
      </div>
      <div class="erm-login-container">
        <div class="column full-height items-center">
          <div class="info">
            <p>Recupera la password del tuo account, basta inserire la mail associata.</p>
          </div>
          <div class="erm-form full-width">
            <div class="erm-form-item">
              <div class="floating-label">
                <input required class="full-width">
                <label>Email</label>
              </div>
            </div>
            <div class="erm-form-item button">
              <button @click="recover" class="primary full-width">Recupera password</button>
            </div>
          </div>
          <div class="erm-back-login">
            <router-link to="login">Torna al login</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'quasar'
export default {
  methods: {
    recover () {
      Toast.create('Password inviata')
    }
  }
}
</script>

<style lang="scss" scoped>
.erm-login-wrapper{
  background: url('../../assets/loginbg.png');
  background-repeat: no-repeat;
  background-size: 40%;
  background-repeat: repeat-x;
  background-position: bottom;
  .erm-login-logo{
    text-align: center;
    h3{
      font-size: 1.5rem;
      margin: 0;
      margin-top: 10px;
      line-height: 20px;
      font-weight: 600;
      small{
        font-weight: 400;
        font-size: 70%;
      }
    }
    img{
      width: 70px;
      height: auto;
    }
  }
  .erm-login-container{
    background: #FFF;
    width: 30%;
    max-width: 400px;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.1);
    margin-top: 40px;
    border-radius: 3px;
    padding: 3em;
    .button{
      margin-top: 30px;
    }
  }
  .erm-back-login{
    margin-top: 20px;
  }
}
</style>
