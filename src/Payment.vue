<template>
  <div id="app">
    <StatusBar />
    <TitleText text="СПОСОБ ОПЛАТЫ" />
    <div class="pays">
      <PayVar variant="Картой" additional="**** **** **** 1234" />
      <PayVar variant="Наличными" />
    </div>
    <img class="home" src="./assets/home.svg" alt="home" />
    <BottomLine />
  </div>
</template>

<script>
import StatusBar from "./components/StatusBar.vue";
import TitleText from "./components/TitleText.vue";
import BottomLine from "./components/BottomLine.vue";
import PayVar from "./components/PayVar.vue";

export default {
  name: "Payment",
  components: {
    StatusBar,
    TitleText,
    BottomLine,
    PayVar
  }
};
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
.home {
  margin-bottom: 0px;
}
.home:hover {
  cursor: pointer;
}
.pays{
  height: 500px;
}
</style>
