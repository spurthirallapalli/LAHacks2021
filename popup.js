document.getElementById("lbutton").addEventListener("click", myFunction);

function myFunction() {
    chrome.storage.local.set({"string": toSave}, function() {
        console.log('Value is set to ');
      });

}

// document.getElementById("no").addEventListener("click", myFunctionTwo);

// function myFunctionTwo() {
//     console.log("Button no pushed!")

// }




