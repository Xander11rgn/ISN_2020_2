<template>
  <div id="app">
    <img alt="backgr" src="./assets/back.jpg">
    <LoginReg/>
  </div>
</template>

<script>
import LoginReg from './components/LoginReg.vue'

export default {
  name: 'Main',
  components: {
    LoginReg
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
