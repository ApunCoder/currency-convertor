let fromCurrency = document.querySelector('#fromCurrency');
let toCurrency = document.querySelector('#toCurrency');
let convertButton = document.querySelector('#convertButton');
let inputAmount = document.querySelector('#input-amount');
let results = document.querySelector('.results');


const requestUrl = apiLink;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {

            // Error checking
            if(xhr.status !== 200){
                alert("Error in fetching data from API");
                return;
            }

            const data = JSON.parse(this.responseText);
            currencyRates = data.conversion_rates;
            
            // Append Select Options
            for(const element in currencyRates){
                const option = document.createElement('option');
                option.value = element;
                option.textContent = element;
                fromCurrency.add(option);
            }
            fromCurrency.value = 'USD';

            // Append for {to} select
            for(const element in currencyRates){
                const option = document.createElement('option');
                option.value = element;
                option.textContent = element;
                toCurrency.add(option);
            }
            toCurrency.value = 'INR';

            // Conversion
            convertButton.addEventListener('click', () => {
                if(inputAmount.length != 0){
                    let fromCurrency = document.getElementById('fromCurrency').value; 
                    let toCurrency = document.getElementById('toCurrency').value;
                    let fromExchangeRate = currencyRates[fromCurrency];
                    let toExchangeRate = currencyRates[toCurrency];
                    const convertedAmount = (inputAmount.value / fromExchangeRate) * toExchangeRate;
                    results.innerHTML = `${inputAmount.value} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
                }
            });

        }
    }
    xhr.send();

