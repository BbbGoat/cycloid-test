<template>
  <div id="app">
    <router-link to="/"><h1>로고</h1></router-link>
    <router-link to="/register">register</router-link>
    <router-link to="/main">main</router-link>
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
</style>
