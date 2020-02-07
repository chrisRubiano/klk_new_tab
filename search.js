var input = document.getElementById('search');
var form =  document.getElementById('searchForm');

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