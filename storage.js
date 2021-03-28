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
 
