<template>
  <div id="app" class="bg-purple">
    <birds/>
  </div>
</template>

<script>
import birds from './components/birds.vue'

export default {
  name: 'App',
  components: {
    birds
  }
}
</script>

<style>

#app {
  margin: 2rem;
  background-color: grey;
}

</style>