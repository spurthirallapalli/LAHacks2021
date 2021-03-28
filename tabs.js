chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
   let url = tabs[0].url; 
   //CODE TO GET ALL TABS IN WINDOW AND ADD TO WEBSITES ARRAY 
   
  // for (let i = 0; i < tabs.length; i++) {
     //document.write(`<li>${tabs[i].url}</li>`);
  //   websites.push(tabs[i].url); 
  //   document.write(websites[i]); 
 //  }
 //  document.write('</ul>');
  x= document.getElementsByClassName("link")[0];
  x.innerHTML = url; 
  
 });