'use strict';

// function greet(name) {
//     console.log(`Hello, ${name}!`)
// }

// greet('Yurii');

function calc(a, b, operation) {
    let result;
    
    if (operation == '-') {
        result = a - b
    } else if (operation == '+') {
        result = a + b
    } else if (operation == '*') {
        result = a * b
    } else if (operation == '/') {
        result = a / b
    }
}

calc(4, 5, `+`);