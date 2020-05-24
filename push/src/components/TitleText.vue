<template>
  <div class="basic">{{text}}</div>
</template>

<script>
export default {
  name: "TitleText",
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
.basic {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-bottom: 8px;
  font-family: Comfortaa;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 7.7px;
  color: #737373;
  text-align: center;
}
</style>
