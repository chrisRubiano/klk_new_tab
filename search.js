var input = document.getElementById('searchInput');
var form =  document.getElementById('searchForm');
var audio = document.querySelector('audio');
var links = document.querySelectorAll('a');

var providers = {
"": "https://www.google.com/search?&q=",
"y":"https://www.youtube.com/results?search_query=",
}


function search() {
    searchStr = input.value;
    var colonPosition = searchStr.indexOf(':');
    if (colonPosition == -1) {
        var provider = '';
    } else {
        var provider = searchStr.slice(0, colonPosition);
    }

    var queryStr = searchStr.slice(colonPosition+1);
    var site = providers[provider]
    window.location.assign(decodeURI(site+queryStr));
}

document.addEventListener('submit', search);

links.forEach(link => link.addEventListener('hover', audio.play)); // TODO find out why this isnt working
