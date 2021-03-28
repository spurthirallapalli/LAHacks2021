var el = document.getElementById("yes");
if(el){
  el.addEventListener("click", myFunction);

function myFunction() {
    console.log("Button yes pushed!")

}
}


var el = document.getElementById("no");
if(el){
  el.addEventListener("click", myFunctionTwo);

  function myFunctionTwo() {
    window.close();

}
}
