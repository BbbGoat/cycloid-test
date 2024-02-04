<template>
  <div class="login">
    <div class="container">
      <div class="wrap">
        <form v-on:submit.prevent="handleSubmit()">
          <div class="input-box">
            <!-- id -->
            <div :class="setIdError ? 'error' : ''">
              <h3>ID</h3>
              <input type="text" placeholder="홍길동" v-model="id"/>
              <div class="setErrorMessage" v-if="setIdError">
                <span>아이디를 입력해주세요.</span>
              </div>
            </div>
            <!-- 휴대폰 번호 -->
            <div :class="setTelError ? 'error' : ''">
              <h3>휴대폰 번호</h3>
              <div class="tel-box">
                <div class="front">010</div>
                <div class="back">
                  <input type="number" placeholder="12345678" v-model="tel"/>
                  <div class="setErrorMessage" v-if="setTelError">
                    <span>휴대폰 번호를 입력해주세요.</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 비밀번호 -->
            <div :class="setPasswordError ? 'error' : ''">
              <h3>비밀번호</h3>
              <input type="password" placeholder="비밀번호" v-model="password"/>
              <div class="setErrorMessage" v-if="setPasswordError">
                <span>비밀번호를 입력해주세요.</span>
              </div>
            </div>
          </div>
          <div class="chk-box">
            <h3>필수 약관 동의</h3>
            <div class="flex">
              <div>
                <input id="chk1" value="chk1" type="checkbox" v-model="checked" />
                <label for="chk1">이용약관 동의</label>
              </div>
              <em>약관보기</em>
            </div>
            <div class="flex">
              <div>
                <input id="chk2" value="chk2" type="checkbox" v-model="checked" />
                <label for="chk2">개인정보취급방침 동의</label>
              </div>
              <em>약관보기</em>
            </div>
            <div class="flex">
              <div>
                <input id="chk3" value="chk3" type="checkbox" v-model="checked" />
                <label for="chk3">위치기반 서비스 이용약관 동의</label>
              </div>
              <em>약관보기</em>
            </div>
            <div class="flex">
              <div>
                <input id="chk4" value="chk4" type="checkbox" v-model="checked" />
                <label for="chk4">이메일, SMS, 알림수신동의 (선택)</label>
              </div>
            </div>
          </div>
          <div class="btn-box" v-if="checked.length != 4">
            <ButtonComp type="button" title="회원가입 완료하기" :secondary="true" />
          </div>
          <div class="btn-box" v-if="checked.length === 4">
            <ButtonComp type="submit" title="회원가입 완료하기" :secondary="false" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComp from './ButtonComp.vue';

export default {
  name: "RegisterComp",
  props: {},
  components: {
    ButtonComp,
  },
  data() {
    return {
      id: '',
      tel: '',
      password: '',
      checked: [],
      setIdError: false,
      setTelError: false,
      setPasswordError: false,
    }
  },
  methods: {
    handleSubmit() {
      console.log('submit')
      this.setIdError = false;
      this.setTelError = false;
      this.setPasswordError = false;

      if (this.id === '') {
        this.setIdError = true;
        return
      }
      if (this.tel === '') {
        this.setTelError = true;
        return
      }
      if (this.password === '') {
        this.setPasswordError = true;
        return
      }

      this.$router.push('login');
    }
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
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
}
.input-box input {
  font-size: 1.4rem;
  width: 100%;
  padding: 1.5rem 0.4rem;
  border: 0;
  border-bottom: 1px solid #f5f5f5;
}
.input-box > div + div {
  margin-top: 3rem;
}
.input-box h3, .chk-box h3 {
  font-size: 1.4rem;
}
.error input {
  border-bottom: 1px solid #ff5245;
}
.setErrorMessage {
  font-size: 1.2rem;
  color: #ff5245;
  padding: 1rem 0.4rem;
}
.tel-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
}
.front {
  font-weight: bold;
  width: 50px;
}
.back {
  width: 100%;
}
.chk-box {
  margin-top: 5rem;
}
.chk-box > h3 {
  margin-bottom: 1.2rem;
}
.chk-box > div + div {
  margin-top: 1.2rem;
}
.chk-box em {
  text-decoration: underline;
  font-style: normal;
  color: #b5b5b5;
  cursor: pointer;
}
.chk-box label {
  margin-left: 1rem;
}
.btn-box {
  margin-top: 5rem;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>