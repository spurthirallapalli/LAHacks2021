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



// document.getElementById("openbutton").addEventListener("click", function ()
// {
//     chrome.tabs.query({active: true, activeWindow: true}, tabs => {
//         console.log(tabs[0].url)
//         // let url = tabs[0].url; 
//     //     var noote = localStorage.getItem(url);
//     //    document.body.innerHTML += '<div class="c"><div class="current-link-list">current site: </div><div class="group-current">' + noote + '</div><button class="openbutton-current">open</button></div>'
       
//       });
// });