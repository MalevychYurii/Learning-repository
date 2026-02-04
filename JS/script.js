"use strict";

let a = 5, b = a;

b = b + 5

// console.log(b);
// console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;

    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newObj = copy(numbers);

newObj.a = 10;
newObj.c.x = 12

console.log(newObj);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign(numbers, add);

clone.d = 55;

console.log(add);
console.log(clone);

const oldArr = ['a', 'b', 'c'];
const newArr= oldArr.slice();

console.log(newArr);
newArr[2] = 'd';
console.log(newArr);

const video = ['youtube', 'vimeo', 'twitch'],
    blogs = ['livejournal', 'wp', 'blogger'],
    internet = [...video, ...blogs, 'facebook'];

console.log(internet);

const array = ['a', 'b'];

const newArray = [...array];

const q = {
    one: 1,
    two: 2
};

const w = {...q};