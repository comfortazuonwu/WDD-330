//initialize the variable for the button
const searchBtn = document.getElementById('submit');

//create current date
let today = new Date();
console.log(today);

let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy =  today.getFullYear();



var current_date = `${yyyy}-0${mm}-0${dd}`;
console.log(current_date)

var first_path = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=";
var ticker = "IBM";
var after_path = "&apikey=KLVZ3FOH17AWG3X8"


document.getElementById('close').onsearch = function() {stockAsk()};
function close(){
    var element = getElementById('information');
    element.remove();
}
document.getElementById("test").addEventListener("search", stockAsk);
function stockAsk() {
    var input = document.getElementById('test').value;
    fetch(first_path + input + after_path)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            //console.table(jsonObject);  // temporary checking for valid response and data parsing
            const meta_data = jsonObject['Meta Data'];
            const time_series = jsonObject['Time Series (Daily)']
            const new_date = Object.values(time_series)[0];
            const symbol = Object.values(meta_data)[1];
            const high = Object.values(new_date)[1];
            const low = Object.values(new_date)[2];
            const volume = Object.values(new_date)[4];
            console.log(new_date);

            

                    let info = document.createElement('div');
                    info.className="information";

                    let second = document.createElement('h4');
                    second.className = 'symbol';
                    let third = document.createElement('p');
                    let forth = document.createElement('p');
                    let fifth = document.createElement('p');
                    let sixtth = document.createElement('button')
                    info.innerHTML+= `<button class="remove" onclick="close(event)">Close</button>`;

                    


                    second.textContent = ` ${symbol}`;
                    third.textContent = `High: ${high}`;
                    forth.textContent = `Low: ${low}`;
                    fifth.textContent = `Volume ${volume}`;
                    
                    // fifth.textContent = `Date: ${testz}`;


                    info.append(second);
                    info.append(third);
                    info.append(forth);
                    info.append(fifth);
                    // info.append(sixtth);

                    document.querySelector('div.stocks').appendChild(info);

                    var closebtns = document.getElementsByClassName("remove");
                    var i;

                    for (i = 0; i < closebtns.length; i++) {
                    closebtns[i].addEventListener("click", function() {
                        this.parentElement.style.display = 'none';
                    });
                    }
                const storageInput = document.querySelector('#test');
                const button = document.querySelector('.remove');

                storageInput.addEventListener('input', letter =>{
                    text
                })
        });
       

}





