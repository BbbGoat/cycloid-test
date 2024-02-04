<template>
  <div class="login">
    <div class="container">
      <div class="wrap">
        <div class="logo">
          <img src="/images/badream.png" alt="바드림 로고">
        </div>
        <div class="text-box">
          <h2>CYCLOID</h2>
          <h3>통합로그인</h3>
        </div>
        <form v-on:submit.prevent="handleSubmit()">
          <div class="input-box">
            <div :class="setEmailError ? 'errorEmail' : ''">
              <input type="text" placeholder="아이디" v-model="email"/>
              <div class="setErrorMessage" v-if="setEmailError">
                <span>아이디를 입력해주세요.</span>
              </div>
            </div>
            <div :class="setPasswordError ? 'errorPassword' : 'pw'">
              <input type="password" placeholder="비밀번호" v-model="password"/>
              <div class="setErrorMessage" v-if="setPasswordError">
                <span>비밀번호를 입력해주세요.</span>
              </div>
            </div>
          </div>
          <div class="option-box">
            <div class="remember">
              <input id="remember" type="checkbox" />
              <label for="remember">아이디 저장</label>
            </div>
            <div class="register">
              <router-link to="/register">회원가입</router-link>
            </div>
          </div>
          <div class="btn-box">
            <ButtonComp type="submit" title="로그인" :secondary="false" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComp from './ButtonComp.vue';

export default {
  name: "LoginComp",
  props: {},
  components: {
    ButtonComp
  },
  data() {
    return {
      email : '',
      password: '',
      setEmailError: false,
      setPasswordError: false,
    }
  },
  methods: {
    handleSubmit() {
      console.log('submit!', this.email);
      this.setEmailError = false;
      this.setPasswordError = false;
      
      if (this.email === '') {
        this.setEmailError = true;
        return
      }
      if (this.password === '') {
        this.setPasswordError = true;
        return
      }

      this.$router.push('main');
    },
  }
};
</script>

<style scoped>
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; 
}
.container {
  max-width: 400px;
  margin: 0 auto;
  height: 100vh ;
  display: grid;
  place-items: center;
}
.wrap {
  width: 100%;
}
.logo {
  width: 180px;
  margin: 0 auto;
}
.logo > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text-box {
  margin: 0 auto;
  text-align: center;
}
.text-box h2 {
  font-size: 1.6rem;
  font-weight: 400;
}
.text-box h3 {
  font-size: 3.2rem;
  line-height: 1.4;
  /* font-weight: 500; */
}
.input-box {
  margin-top: 6rem;
}
.input-box input {
  font-size: 1.6rem;
  width: 100%;
  padding: 1.5rem 0.4rem;
  border: 0;
  border-bottom: 1px solid #f5f5f5;
}
::placeholder {
  color: #9e9e9e;
}
.pw {
  margin-top: 1.6rem;
}
.errorEmail input {
  border-bottom: 1px solid #ff5245;
}
.errorPassword input {
  border-bottom: 1px solid #ff5245;
}
.setErrorMessage {
  font-size: 1.2rem;
  color: #ff5245;
  padding: 1rem 0.4rem;
}
.option-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3rem 0;
  font-size: 1.4rem;
}
</style>
