// chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//     let tablink = tabs[0].url;
//     // use `url` here inside the callback because it's asynchronous!
// });
// chrome.tabs.getSelected(null,function(tab) {
//     var tablink = tab.url;
//     return tab; 
// });
// function getCurrentTabUrl(callback) {  
//     var queryInfo = {
//       active: true, 
//       currentWindow: true
//     };
  
//     chrome.tabs.query(queryInfo, function(tabs) {
//       var tab = tabs[0]; 
//       var url = tab.url;
//       callback(url);
//     });
//   }
  
//   function renderURL(statusText) {
//     document.getElementById('status').textContent = statusText;
//   }
  
//   document.addEventListener('DOMContentLoaded', function() {
//     getCurrentTabUrl(function(url) {
//       renderURL(url); 
//     });
//   });


// chrome.tabs.getCurrent(function(tab){
//     alert(tab.url);
// });

chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
    // and use that tab to fill in out title and url
    var tab = tabs[0];
    console.log(tab.url);
    alert(tab.url);
});

// chrome.runtime.sendMessage({ text: "what is my tab_id?" }, tabId => {
//     console.log('My tabId is', tabId);
//  });