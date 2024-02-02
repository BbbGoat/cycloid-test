<template>
  <div class="login">
    <div class="container">
      <div class="logo">
        <img src="" alt="바드림 로고">
      </div>
      <div class="text-box">
        <h2>CYCLOID</h2>
        <h3>통합로그인</h3>
      </div>
      <div class="input-box">
        <div class="email">
          <input type="email" placeholder="아이디"/>
        </div>
        <div class="pw">
          <input type="password" placeholder="비밀번호"/>
        </div>
      </div>
      <div class="btn-box">
        <div>
          <input id="remember" type="checkbox" />
          <label for="remember">아이디 저장</label>
        </div>
        <router-link to="/register">회원가입</router-link>
      </div>
      <!-- 로그인 버튼은 컴포넌트로 만들어서 여기저기 사용할 예정!!! -->
      <button>로그인</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComp",
  props: {},
};
</script>

<style scoped>
.login {

}
.container {

}
</style>
