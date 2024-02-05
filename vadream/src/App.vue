<template>
  <div id="app">
    <header>
      <router-link to="/">
        <h1>
          <img src="/images/logo.png" alt="사이클로이드 로고">
        </h1>
      </router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding: 3rem 3rem 0;
}
header h1 {
  display: inline-block;
}
</style>
