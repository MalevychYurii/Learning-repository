"use strict";

console.log("arr" + " - object");   
console.log(4 + " - object");
console.log(4 + +"5");

let incr = 10,
    decr = 10;

console.log(incr++)
console.log(decr--);

console.log((2*4) === +("8"));

const isChecked = true,
      isClose = false;

console.log(isChecked && !isClose);

const arr = [1, 2, 3, 4, 5];

arr.forEach((item => {
    if (item % 2 !== 0) {
        console.log(`odd number: ${item}`);
    }    
}));