<template>
  <div id="app">
    <StatusBar/>
    <TitleText text="ЗАДАЙТЕ МАРШРУТ"/>
    <CityMap/>
    <AddressInput title1="Откуда" addr="Введите адрес отправления"/>
    <img class="arrow" src="./assets/arrow.svg" alt="">
    <AddressInput title1="Куда" addr="Введите адрес назначения"/>    
    <OrderButtons/>
    <img class="home" src="./assets/home.svg" alt="home">
    <BottomLine/>
  </div>
</template>

<script>
import StatusBar from './components/StatusBar.vue'
import TitleText from './components/TitleText.vue'
import CityMap from './components/CityMap.vue'
import AddressInput from './components/AddressInput.vue'
import OrderButtons from './components/OrderButtons.vue'
import BottomLine from './components/BottomLine.vue'


export default {
  name: 'Order',
  components: {
    StatusBar,
    TitleText,
    CityMap,
    AddressInput,
    OrderButtons,
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
  display: flex;
  flex-direction: column;
}
.arrow{
  z-index: 1;
  margin-bottom: -16px;
}
.home{
  margin-top: 56px;
}
.home:hover{
  cursor: pointer;
}
.arrow:hover{
cursor: pointer;
}
</style>
