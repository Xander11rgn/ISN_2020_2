<template>
  <div class="buttons">
    <b-container>
      <b-row>
        <b-col>
          <a href="#"><b-button variant="outline-success" size="lg">ВОЙТИ</b-button></a>
        </b-col>
        <b-col>
          <b-button variant="outline-success" size="lg">РЕГИСТРАЦИЯ</b-button>
        </b-col>
      </b-row>
    </b-container>
    <div class="line"></div>
  </div>
  
</template>

<script>
export default {
  name: 'LoginReg',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  box-sizing: border-box;
  
}
.container{
  padding-right: 18px;
}
.btn{
  width: 143px;
  height: 45px;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius: 15px;
  font-family: Roboto;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
}
.buttons{
  border: 1px solid black;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 13px;
}
.line{
  background: #27AE60;
  border-radius: 92px;
  width: 180px;
  height: 4px;
  margin-left: auto;
  margin-right: auto;
  
}
</style>
