let productArray = [
    {
        image: "/img/jImRpPw.jpg",
        name: "AirPods Pro",
        price: "USD 249",
        numprice: 249,
        amount: 0,
        id: 1
    }, {
        image: "/img/NlZwVTY.jpg",
        name: "NFL Team (Average)",
        price: "USD 3,000,000,000",
        numprice: "3,000,000,000",
        amount: 0,
        id: 2
    }, {
        image: "/img/CugpEfY.jpg",
        name: "PS5",
        price: "USD 499",
        numprice: 499,
        amount: 0,
        id: 3
    }, {
        image: "/img/SH7FrjV.jpg",
        name: "Iphone 14 Pro Max - 1TB",
        price: "USD 1,599",
        numprice: "1,599",
        amount: 0,
        id: 4
    }, {
        image: "/img/69V42nb.jpg",
        name: "MacBook Pro 14' M1 Max (64GB RAM | 4TB)",
        price: "USD 4,699",
        numprice: "4,699",
        amount: 0,
        id: 5
    }, {
        image: "/img/XrStrbb.jpg",
        name: "Razer Blade 14 Top spec (2022)",
        price: "USD 2,799",
        numprice: "2,799",
        amount: 0,
        id: 6
    }
]


function showCard() {
    let result = ''
    for (const i in productArray) {
        result += `
         <div class="app-container" id="allElements">
            <div class="element">
                    <img src= ${productArray[i].image} alt="MacBook Pro 14' M1 Max (64GB RAM | 4TB)">
                    <p id="name">${productArray[i].name}</p>
                    <span class="price">${productArray[i].price}</span>
                    <div class="buyAndSellContainer" data-price="4,699">
                        <button class="btn-sell" id="sell" disabled>Sell</button>
                        <span class="amount">${productArray[i].amount}</span>
                        <button class="btn-buy" id="buy">Buy</button>
                    </div>
                </div>
            </div>
         `
    }
    document.getElementById("allElements").innerHTML = result
}
showCard()
function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}
let percentTotal = 217000000000;
var buyBtn = document.getElementsByClassName('btn-buy');
var sellBtn = document.getElementsByClassName('btn-sell');
var amount = document.getElementsByClassName('amount');
var percentageLeft = document.getElementById('percentageLeft');
console.log(totalMoney);
var price = document.getElementsByClassName("price");
console.log(buyBtn);
let bill;
let total;
let percent;
let sum = 0;
// let percent = percentageLeft.innerHTML;
for (let i = 0; i < buyBtn.length; i++) {
    buyBtn[i].addEventListener('click', () => {
        var totalMoney = document.getElementById("totalMoney").innerHTML;
        productArray[i].amount += 1;
        amount[i].innerText = productArray[i].amount;
        total = totalMoney.replace(/\,/g, '');
        let priceEach = (price[i].innerHTML.slice(-price[i].innerHTML.length + 4)).replace(/\,/g, '');
        sum = sum + Number(priceEach);
        total = total - priceEach;
        document.getElementById("totalMoney").innerHTML = formatCash(total.toString());
        if (productArray[i].amount > 0) {
            sellBtn[i].disabled = false;
        }
        percent = ((sum / percentTotal) * 100).toFixed(6);
        percentageLeft.innerHTML = percent;
    })
    sellBtn[i].addEventListener('click', () => {
        var totalMoney = document.getElementById("totalMoney").innerHTML;
        productArray[i].amount -= 1;
        amount[i].innerText = productArray[i].amount;
        amount[i].innerText = productArray[i].amount;
        total = totalMoney.replace(/\,/g, '');
        let priceEach = (price[i].innerHTML.slice(-price[i].innerHTML.length + 4)).replace(/\,/g, '');
        sum = sum - Number(priceEach);
        total = Number(total) + Number(priceEach);
        document.getElementById("totalMoney").innerHTML = formatCash(total.toString());
        if (productArray[i].amount == 0) {
            sellBtn[i].disabled = true;
        }
        percent = ((sum / percentTotal) * 100).toFixed(6);
        percentageLeft.innerHTML = percent;
    })
}