'use strict';
const usdCurr = 43.5;
const discount = 0.9;

function convert (amount, curr) {
    return curr * amount
}

const calc = (a, b) => { console.log((a+b)) };

calc(2,5);

function promotion(result) {
    console.log(result * discount)
}

promotion(convert(650, usdCurr) * discount);