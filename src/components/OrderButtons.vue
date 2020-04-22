<template>
  <div class="basic">
    <a href="order.html"><b-button variant="outline-success" size="lg">ЗАКАЗАТЬ</b-button></a>
    <a href="order.html"><b-button variant="outline-success" size="lg">СПОСОБ ОПЛАТЫ</b-button></a>
  </div>
</template>

<script>
export default {
  name: "OrderButtons",
  props: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  box-sizing: border-box;
}
.btn{
  width: 162px;
  height: 30px;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius: 15px;
  font-family: Roboto;
  font-weight: 900;
  font-size: 15px;
  line-height: 17px;
  border: 1px solid #27AE60;

}
.basic {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-top: 20px;
}
</style>
