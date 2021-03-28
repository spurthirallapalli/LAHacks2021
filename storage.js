var el = document.getElementById('lbutton');
if(el){
    var myKey; 
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        myKey = tabs[0].url; 
    });
    
    document.getElementById("lbutton").addEventListener("click", function ()
        {
            var user = document.getElementById("notesBody").value;
            localStorage.setItem(myKey, user);
            alert("note saved");
            console.log("note saved");
        } , true);
}

// var el2 = document.getElementById('openbutton');
// if(el2){
//     var myKey; 
//     chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//         myKey = tabs[0].url; 
//     });
    
//     document.getElementById("openbutton").addEventListener("click", function ()
//         {
//             var user = document.getElementById("openbutton").value;
//             localStorage.getItem(myKey, user);
//             alert("here is the note");
//             console.log("here is the note");
//         } , true);
// }

var el = document.getElementById("openbutton");
if(el){
  el.addEventListener("click", myFunctionTwo);

  function myFunctionTwo() {
    console.log("here is the note");

}
}