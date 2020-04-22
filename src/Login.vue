<template>
  <div id="app">
    <StatusBar/>
    <Inputs/>
    <ConfirmButton text="ВОЙТИ"/>
    <img class="home" src="./assets/home.svg" alt="home">
    <BottomLine/>
  </div>
</template>

<script>
import StatusBar from './components/StatusBar.vue'
import Inputs from './components/Inputs.vue'
import ConfirmButton from './components/ConfirmButton.vue'
import BottomLine from './components/BottomLine.vue'


export default {
  name: 'Login',
  components: {
    StatusBar,
    Inputs,
    ConfirmButton,
    BottomLine
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
  height: 640px;
  width: 360px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid black;
  padding: 11px;
}
.home{
  margin-top: 365px;
  margin-bottom: 10px;
}
.home:hover{
  cursor: pointer;
}
</style>
