'use strict';

const arr = [1, 2, 3, 8, 5];

arr.pop(); // delete last element

arr.push(12); // add a new element to the end of an array

console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let value of arr) {
//     console.log(value)
// }

arr.forEach((item, i, arr) => {
    (item % 2 === 0) ? console.log(`on ${i} position we have ${item}`) : console.log('It is odd num')
});

const arrEvenNumbers = arr.filter((num) => {
    return num % 2 === 0;
});

console.log(arrEvenNumbers);

// const str = prompt(``, ``);
// const products = str.split(`,`);
// console.log(products);

const names = [`Yurii`, `Oleg`, 'Ivan'];
console.log(names.join(`; `), `-`, typeof(names.join(`; `)));

arr.sort((a, b) => {
    return a - b;
});
console.log(arr)