<template>
  <div class="basic">
    <p class="var">{{variant}}</p> 
    <p class="add">{{additional}}</p>
    <a href="#"><b-button variant="outline-success" size="lg">ПОДТВЕРДИТЬ</b-button></a>
  </div>
</template>

<script>
export default {
  name: "PayVar",
  props: {
    variant: String,
    additional: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  box-sizing: border-box;
}
.btn{
  width: 134px;
  height: 22px;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius: 15px;
  font-family: Roboto;
  font-weight: 900;
  font-size: 14px;
  line-height: 8px;
  border: 1px solid #27AE60;

}
.basic {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-top: 20px;
}
.var{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #27AE60;
  margin-bottom: 0;
}
.add{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: #CBCBCB;
  margin-bottom: 0;
}
</style>
