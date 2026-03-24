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

const squad = [];

const firstAstronaut = {
  id: 1,
  name: "Andy",
  role: "Commander",
  isEVAEligible: true,
  priority: 3
};

function addCrewMember(crew, astronaut) {
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].id === astronaut.id) {
      console.log("Duplicate ID: " + astronaut.id);
      return;
    }
  }
  crew.push(astronaut);
  console.log(`Added ${astronaut.name} as ${astronaut.role}`);
}

addCrewMember(squad, firstAstronaut);

const remainingCrew = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
  { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
  { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
  { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
  { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
  { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
  { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
]; 

remainingCrew.forEach((member) => {
  addCrewMember(squad, member);
})

console.log(squad)

function normalizeUnits(manifest) {
  const newManifest = { ...manifest };

  if (newManifest.unit === "lb") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
  }

  return newManifest;
}

function validateManifest(manifest) {
  const errors = {};

  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    errors.containerId = "Invalid";
  }

  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  if (!("weight" in manifest)) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return Object.keys(errors).length === 0 ? {} : errors;
}

function processManifest(manifest) {
  const validation = validateManifest(manifest);

  if (Object.keys(validation).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);

    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validation);
  }
}