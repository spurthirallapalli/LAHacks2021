document.getElementById("yes").addEventListener("click", myFunction);
chrome.storage.sync.set({'string': notesBody}, function() {
    // Notify that we saved.
    alert('Settings saved');
  });


