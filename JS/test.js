const array = [1, 2, 2, 3, 1, 5, 12];

function removeDuplicate() {
    
    let seen = [];
    let duplicates = [];

    for (let value of array) {
        if (seen.includes(value)) {
            duplicates.push(value);
        } else {
            seen.push(value);
        }
    }

    console.log(`seen: ${seen}, duplicates: ${duplicates}`)
}

removeDuplicate();

let arr = [];

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

function validatePassword(password) {
    
    if (password.length < 8) return false;

    if (!/[0-9]/.test(password)) return false;
    if (!/[A-Z]/.test(password)) return false;

    return true;
}

console.log(validatePassword("password")); 