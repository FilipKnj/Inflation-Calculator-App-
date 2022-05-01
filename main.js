const inflation = document.getElementById('inflationRate');
const money = document.getElementById('money');
const years = document.getElementById('years');
const result = document.querySelector('.result');

function calculate(){
    let inflation_rate = parseFloat(inflation.value);
    let money_value = parseFloat(money.value);
    let years_value = parseFloat(years.value);

    let worth  = money_value + (money_value * (inflation_rate / 100));

    for (let i = 0; i < years_value; i++) {
        worth += worth * (inflation_rate / 100)
    }

    worth = worth.toFixed(2);

    result.style.display = 'block';
    result.innerText = `Today's ${money_value} €  is worth the same as ${worth} € in ${years_value} years.`
    
    console.log(typeof worth)
}