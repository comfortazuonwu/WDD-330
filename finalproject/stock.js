// var jsonData;

// let mainURL = 'https://fcsapi.com/api-v3/stock/latest?symbol=AMD,AAPL,MSFT,FB&access_key=LLySuyyALfgemkZV7A4ytSYc';
// fetch(mainURL)
//     .then(response => response.json())
//     .then(data => load(data));


// function load(data) {
//     jsonData = data;
// }

// function showStockList(data) {
//     const stockList = document.getElementById("stocks");
//     stockList.innerHTML = '';
//     renderStockList(data.response, stockList);
// }

// function renderStockList(stocks, parent) {
//     stocks.forEach(stocklist => {
//         parent.appendChild(renderOneStock(stocklist));
//     });
// }

// function renderOneStock(formula) {
//     const item = document.createElement("section");
//     item.className = "menu";

//     item.innerHTML = `<h2>${formula.s}</h2></div>`;
//     // item.innerHTML += `<h3>Opening Price : ${formula.o}</h3>`;
//     item.innerHTML += `<h3>High : ${formula.h}</h3>`;
//     item.innerHTML += `<h3>Low : ${formula.l}</h3>`;
//     item.innerHTML += `<h3>Closing Price : ${formula.c}</h3>`;

//     return item;
// }


// function allStocks() {
//     let data = jsonData
//     showStockList(data);
// }

const requestURL = 'https://fcsapi.com/api-v3/stock/latest?symbol=AMZN,AAPL,TSLA,FB&access_key=LLySuyyALfgemkZV7A4ytSYc';

fetch(requestURL)
    .then(function (response) {
        return response.json();
        
    })
    .then(function (jsonObject) { 
        const stocks = jsonObject["response"];

        for (let i = 0; i < 4; i++) {
            let stock = document.createElement("section");
            let symbol = document.createElement("h2");
            let high = document.createElement("h3");
            let low = document.createElement("h3");
            let closing = document.createElement("h3");
            let currency = document.createElement("h3");
            let change = document.createElement("h3");

         

            symbol.textContent =  stocks[i].s;
            high.textContent = "High:" + stocks[i].h;
            low.textContent = "Low:" +  stocks[i].l;
            closing.textContent = "Closing:" + stocks[i].c;
            currency.textContent = "Currency:" + stocks[i].ccy;
            change.textContent = "Change(1 day):" + stocks[i].ch;

           

            stock.appendChild(symbol);
            stock.appendChild(high);
            stock.appendChild(low);
            stock.appendChild(closing);
            stock.appendChild(currency);
            stock.appendChild(change);

            
            document.querySelector("div.stocks-list").appendChild(stock);
        }
       
    });

