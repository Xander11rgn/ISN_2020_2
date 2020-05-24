<template>
  <div class="basic">
    <b-form-input class="input" type="email" placeholder="Введите e-mail"></b-form-input>
    <b-form-input class="input" type="password" placeholder="Введите пароль"></b-form-input>
  </div>
</template>

<script>
export default {
  name: "Inputs",
  props: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  box-sizing: border-box;
}
.input{
  margin-bottom: 7px;
  border: 2px solid #27AE60;
  border-radius: 0px;
  height: 52px;
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
}
</style>
