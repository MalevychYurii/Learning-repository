// 1
function reverseString(str) {
    let reversed = str.split('').reverse().join('')
    return reversed
}

console.log(reverseString("hello"))

// 2
function factorialize(num) {

    let result = 1;

    for (let i = 1; i <= num; i++) {
        result = result * i
    }

    return result
}

console.log(factorialize(5));

// 3
function findLongestWordLength(str) {
  let words = str.split(" ");
  let longest = 0;

  for (let word of words) {
    if (word.length > longest) {
      longest = word.length;
    }
  }

  return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped"));

// 4

function palindrome(str) {

  let reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(palindrome('racecar'));

// 5
function largestOfFour(arr) {

  let result = [];

  for (let subArr of arr) {
    result.push(Math.max(...subArr));
  }

  return result;
}

console.log(largestOfFour([[4,5,1],[13,27,18],[32,35,37]]))