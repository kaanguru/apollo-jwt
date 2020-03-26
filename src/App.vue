<template>
  <div id="app">
    <selam/>
  </div>
</template>

<script>
import selam from './components/selam.vue'

export default {
  name: 'App',
  components: {
    selam
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
