<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body {
    margin: 0;
    overflow: hidden;
  }
  .app {
    background: url('./assets/background.png');
    height: 100vh;
    width: 100%;
  }
</style>
