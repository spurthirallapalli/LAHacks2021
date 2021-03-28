document.getElementById("no").addEventListener("click", myFunctionTwo);

function myFunctionTwo() {
    window.close();
}


var el = document.getElementById("no");
if(el){
  el.addEventListener("click", myFunctionTwo);

  function myFunctionTwo() {
    window.close();

}
}
