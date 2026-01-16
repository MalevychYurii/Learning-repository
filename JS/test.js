'use strict';

function greet(name) {
    console.log(`Hello, ${name}!`)
}

greet('Yurii');

function calc(a, b, operation) {
    let result;
    
    if (operation === '-') {
        result = a - b;
    } else if (operation === '+') {
        result = a + b;
    } else if (operation === '*') {
        result = a * b;
    } else if (operation === '/') {
        result = a / b;
    }

    return result
}

console.log(calc(4, 5, '-'))

function isEven(num) {

    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(5));

function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

console.log(sumArray([1, 1, 1, 1]));

function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([1, 2, 3]));

function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(getEvenNumbers([1,2,3]))