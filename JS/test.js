function counter() {
    let num = 0;
    
    function counterPlus() {
        num++;
        console.log(num);
    }
    
    counterPlus(); // Викликаємо функцію
    return num;    // Повертаємо оновлене значення
}

const finalNum = counter(); // Виведе 1
console.log(finalNum); // 1
console.log(finalNum);
console.log(finalNum);
console.log(finalNum);