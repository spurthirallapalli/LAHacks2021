var storageCnt = localStorage.length

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url; 
 
   document.body.innerHTML += '<div class="c"><div class="current-link-list">current site: </div><div class="group-current">' + url + '</div><button class="openbutton-current">open</button></div>'
   
  });
 

for (var i=0; i<storageCnt; i++)
{
    document.body.innerHTML += '<div class="c"><div class="group">' + localStorage.key(i) + '</div><button id="openbutton">open</button><button id="deletebutton">delete</button>'

}


 
 
 