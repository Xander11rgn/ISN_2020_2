<template>
  <div class="basic">
    <div class="status-bar">
      <div class="left">
        <img src="../assets/Time.svg" alt="time" />
      </div>
      <div class="right">
        <img src="../assets/conn.svg" alt="connection" />
        <img src="../assets/Wifi.svg" alt="wifi" />
        <img src="../assets/Battery.svg" alt="battery" />
      </div>
    </div>
    <a href="#" class="back">
      <img src="../assets/Union.svg" alt="back" />
    </a>
  </div>
</template>

<script>
export default {
  name: "StatusBar",
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
  margin-bottom: 7px;
}
.status-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.back {
  display: flex;
  justify-content: flex-start;
  margin-top: 6px;
  width:21px;
}
.back:hover{
  cursor:pointer;
  
}
.right{
  display: flex;
  justify-content: space-between;
}
</style>
