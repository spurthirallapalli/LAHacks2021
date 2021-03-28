var storageCnt = localStorage.length

for (var i=0; i<storageCnt; i++)
{
    document.body.innerHTML += '<div class="c"><div class="group">' + localStorage.key(i) + '</div><button class="openbutton">open</button><button class="deletebutton">delete</button>'
}
