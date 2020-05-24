const clear = document.querySelector('#clear');
const txt = document.querySelector('#txt');

txt.value = localStorage.getItem("text");

clear.addEventListener('click', function () {
  localStorage.removeItem('text');
  txt.value = "";
})

txt.addEventListener('input', function(){
  localStorage.setItem("text", txt.value);
})