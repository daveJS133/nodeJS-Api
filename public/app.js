
var searchBar = document.querySelector("#search-bar");
var tickerIndex = new TickerIndex();
var user = new User();

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url)
  request.onload = callback;
  request.send();
}

var callback = function() {
  if (this.status != 200) return;
    var dataObject = this.responseText.toString();
    dataObject = dataObject.slice(3);
    dataObject = JSON.parse(dataObject);
    console.log(dataObject);
  }

  var makeQuery = function(){
    var searchQuery = searchBar.value;
    // var tickers = findTickers;
    var query = "?q=NASDAQ" + searchQuery;
    var url = 'http//finance.google.com/finance/info' + query;

    return makeRequest(url, callback);
  }

  var update = function(){
    for(var i = 0, l = myArray.length; i < l; ++i){
      makeRequest('http//finance.google.com/finance/info?q=NASDAQ' + tickerIndex[i]);
    }
  }

  var app = function() {

 
    var interval = 8.64e+7.toExponential();
    var searchButton = document.querySelector("#search-button");

    // searchBar.onkeyup = findTickers;
    searchButton.onclick = makeQuery;

    setInterval(update, interval);
  }

  var findTickers = function(){
    var results = tickerIndex.filter(completeSearch);

    console.log(results);
    return results;
  }

var completeSearch = function(object){
  object.ticker.includes(searchBar.value) || object.name.includes(searchBar.value);
}

  window.onload = app;