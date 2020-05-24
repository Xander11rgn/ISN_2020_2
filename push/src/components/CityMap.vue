<template>
  <div class="basic">
    <img src="../assets/map.png" width="333px" height="275px" alt="city-map">
  </div>
</template>

<script>
export default {
  name: "CityMap",
  props: {
    
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
  border: 1px solid #333;
  box-shadow: inset 0px 4px 4px rgba(0,0,0,0.25);
  margin-bottom: 7px;
}
</style>
