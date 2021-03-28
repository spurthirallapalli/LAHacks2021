var keyVar = "";
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    keyVar = tabs[0].title; 
  });
  
  document.getElementById("lbutton").addEventListener("click", function ()
    {
        var user = document.getElementById("user").value ;
        localStorage.setItem('keyVar', 'user');
        const key = localStorage.getItem('keyVar');

alert('dobby');
    });
  