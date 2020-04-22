<template>
  <div class="basic">
    <a href="order.html"><b-button variant="outline-success" size="lg">{{text}}</b-button></a>
  </div>
</template>

<script>
export default {
  name: "Inputs",
  props: {
    text: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  box-sizing: border-box;
}
.btn{
  width: 100%;
  height: 45px;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius: 15px;
  font-family: Roboto;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
}
.basic {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>
