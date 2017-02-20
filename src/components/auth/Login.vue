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
          <div class="erm-info full-width text-center">
            <p>Bentoranto, inserisci le credenziali per continuare.</p>
          </div>
          <div class="erm-form full-width">
            <div class="erm-form-item">
              <div class="floating-label">
                <input required v-model="loginForm.email" class="full-width">
                <label>Email</label>
              </div>
            </div>
            <div class="erm-form-item">
              <div class="floating-label">
                <input required type="password" v-model="loginForm.password" class="full-width">
                <label>Password</label>
              </div>
            </div>
            <div class="erm-form-item button">
              <q-progress-button
                indeterminate
                :percentage="loginInProgress"
                class="primary full-width"
                dark-filler
                @click.native="login"
              >
                Accedi
              </q-progress-button>
            </div>
          </div>
          <div class="erm-recover">
            <router-link to="recover">Password smarrita?</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fireData from '../../firedata'
export default {
  data () {
    return {
      loginInProgress: 0,
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.loginInProgress = 1
      fireData.login(this.loginForm, (error, user) => {
        if (error) return console.log(error)
        fireData.getUserData(user, (error, response) => {
          if (error) return console.log(error)
          this.loginInProgress = false
          this.$router.push({name: 'realtime'})
        })
      })
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
    .erm-recover{
      margin-top: 20px;
    }
  }
}
</style>
