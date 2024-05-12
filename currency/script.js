
function convertCurrency() {
  var amount = document.getElementById("amount").value;
  var fromCurrency = document.getElementById("fromCurrency").value;
  var toCurrency = document.getElementById("toCurrency").value;
  var resultElement = document.getElementById("result");
  
  if (isNaN(amount) || amount <= 0) {
    resultElement.textContent = "Please enter a valid amount.";
    return;
  }
  
  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        resultElement.textContent = "Failed to fetch exchange rates. Please try again later.";
      } else {
        var exchangeRate = data.rates[toCurrency];
        var convertedAmount = (amount * exchangeRate).toFixed(2);
        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      resultElement.textContent = "An error occurred while fetching data. Please try again later.";
    });
}
