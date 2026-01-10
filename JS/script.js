"use strict";

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;  
// }

// do {
//     console.log(num);
//     num++;
// } while (num <= 60);

const evenArr = [];
const oddArr = [];

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        evenArr.push(i);
    } else {
        oddArr.push(i);
    }
}

console.log('Even numbers:', evenArr);
console.log('Odd numbers:', oddArr);

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += `\n`;
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);

    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);

        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}