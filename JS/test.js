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

function chunkArrayInGroups(arr, num) {
  let resultArr = [];
  
  for (let i  = 0; i < arr.length; i = i + num) {
    let newArrs = arr.slice(i, i + num);

    resultArr.push(newArrs)
  }
  return resultArr
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property) {
  for (let i = 0; i < contacts.length; i++) {
    if (name == contacts[i]["firstName"]) {
      if (contacts[i][property] != undefined){
        return contacts[i][property]
      } else {
        return "No such property"
      }
}
  }
  return "No such contact"
}

function repeatStringNumTimes(str, num) {
  let result = "";
  if (num <= 0) {
    return ""
  }

  for (let i = 0; i < num; i++) {
    result += str
  }
  return result
}

console.log(repeatStringNumTimes("*", 3))

function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i+1].charCodeAt(0) - str[i].charCodeAt(0) > 1) {
      return String.fromCharCode(str[i].charCodeAt(0) + 1)
    }
    console.log(i.charCodeAt(0))
  }
  return undefined
}

fearNotLetter("abce")