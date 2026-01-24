'use strict';

function test() {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let arr2 = [];

    arr.forEach((num) => {
        if (num % 2 === 0) {
            arr2.push(num);
        }
    });

    return arr2;
}

console.log(test());
