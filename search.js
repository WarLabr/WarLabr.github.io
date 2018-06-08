var key = 'AIzaSyDZvWpH4NBvelc9FzOAMnTTGUG005pCCus';
var request = '';
blockMas = new Array();


function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyDZvWpH4NBvelc9FzOAMnTTGUG005pCCus');
}
 
function search() {
    var query = document.getElementById('inp').value;
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q:query,
        maxResults: 20
    });
    request.execute(onSearchResponse);
    request.execute(Output);


}
function onSearchResponse(response) {
   console.log(response)
}

function Output(response){
    block = document.createElement('div');
    block.className = "listblock";

    for (i=0; i<20; i++){
        var cont = document.createElement('div');
        cont.id = "contik";
        blockMas.push(cont);
        var href = document.createElement('a');
        href.setAttribute("href", "https://www.youtube.com/watch?v="+response.result.items[i].id.videoId);
        var pic = document.createElement('img');
        pic.setAttribute("src", response.result.items[i].snippet.thumbnails.default.url);
        href.appendChild(pic);
        cont.appendChild(href);
        var name = document.createElement('h3');
        var tname = document.createTextNode(response.items[i].snippet.title);
        name.appendChild(tname);
        cont.appendChild(name);
        var p = document.createElement('p');
        var t = document.createTextNode(response.items[i].snippet.description);
        p.appendChild(t);
        cont.appendChild(p);
        var author = document.createElement('p');
        var ta = document.createTextNode(response.items[i].snippet.channelTitle);
        author.appendChild(ta);
        cont.appendChild(author);
        
        block.appendChild(cont);
    }
    size();
    document.body.appendChild(block);

}

function size() {
    var newWindowSize = document.getElementById('window').clientWidth;
    newWindowSize=Math.floor(newWindowSize/5);
    for (var i=0; i<blockMas.length; i++)
    {
        blockMas[i].style.width=newWindowSize;
    }
}


