document.getElementById("yes").addEventListener("click", myFunction);
chrome.storage.sync.set({'string': notesBody}, function() {
    // Notify that we saved.
    alert('Settings saved');
  });


// chrome.tabs.getCurrent(function(tab){
//     alert(tab.url);
// });
/*
chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
    // and use that tab to fill in out title and url
    var tab = tabs[0];
    console.log(tab.url);
    alert(tab.url);
});
*/

// chrome.runtime.sendMessage({ text: "what is my tab_id?" }, tabId => {
//     console.log('My tabId is', tabId);
//  });
