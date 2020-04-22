<template>
  <div class="basic">
    <label class="label">{{title1}}</label>
    <b-form-input class="input" type="text" :placeholder="addr"></b-form-input>
  </div>
</template>

<script>
export default {
  name: "AddressInput",
  props: {
    title1: String,
    addr: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  box-sizing: border-box;
}
.label{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #646464;
  margin-bottom: 0;
}
.input{
  border: 2px solid #27AE60;
  border-radius: 0px;
  height: 31px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #27AE60;
}
.basic {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
