var first_path = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=";
var ticker = "IBM";
var after_path = "&apikey=KLVZ3FOH17AWG3X8"




// fetch("https://fcsapi.com/api-v3/stock/latest?symbol=AMD,AAPL,MSFT,FB&access_key=vCzXK58NqSAALuNnKhE3j")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonObject) {
//         //console.table(jsonObject);  // temporary checking for valid response and data parsing
//         console.log(jsonObject);
        
        

//     });



function stockAsk(){
    var input = document.getElementById('test').value;
    fetch(first_path + input + after_path)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

function load(data) {
    jsonData = data;
    console.log(jsonData);
    
}