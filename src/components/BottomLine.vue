<template>
  <div class="basic">
    <div class="line"></div>
    
  </div>
</template>

<script>
export default {
  name: "BottomLine",
  props: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  box-sizing: border-box;
}
.line{
  background: #27AE60;
  border-radius: 92px;
  width: 180px;
  height: 4px;
  margin-left: auto;
  margin-right: auto;
}
.basic {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
