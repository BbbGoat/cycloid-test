<template>
  <div id="app">
    <header>
      <router-link to="/">
        <h1>
          <img src="/images/logo.png" alt="사이클로이드로고">
        </h1>
      </router-link>
    </header>
    <!-- <router-link to="/register">register</router-link>
    <router-link to="/main">main</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
  }
}
</script>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  /* right: 0; */
  z-index: 99;
  padding: 3rem 3rem 0;
}
header h1 {
  display: inline-block;
}
</style>
