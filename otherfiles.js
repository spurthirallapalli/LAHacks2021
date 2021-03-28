var storageCnt = localStorage.length
var urlvalue = []

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url; 
 
   document.body.innerHTML += '<div class="c"><div class="current-link-list">current site: </div><div class="group-current">' + url + '</div><button class="openbutton-current">open</button></div>'
   
  });
 

for (var i=0; i<storageCnt; i++)
{

  document.body.innerHTML += '<div class="c"><div class="group">' + localStorage.key(i) + '</div><button id="openbutton">open</button><button id="deletebutton">delete</button>'
  urlvalue.push(localStorage.key(i));
  
}

var el = document.getElementById("openbutton");
if(el){
  el.addEventListener("click", myFunction);

function myFunction() {
    // chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        alert("open clicked");
        // let url = tabs[0].url; 
    //     var noote = localStorage.getItem(url);
    //    document.body.innerHTML += '<div class="c"><div class="current-link-list">current site: </div><div class="group-current">' + noote + '</div><button class="openbutton-current">open</button></div>'
       
    //   });

}
}

window.onload = function() {
    var testing = document.getElementById("openbutton");
    testing.addEventListener("click", function(e){ alert("test") } , false);
}


 
 
 