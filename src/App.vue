<template>
  <div id="app">
  <navbar></navbar>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import navbar from './components/nav/nav'
export default {
  components: {navbar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
