function checkNumber(num) {
    num = 5;
    
    if (num % 2 == 0) {
        console.log('even');
        return num;
    }

    if (num % 2 !== 0) {
        console.log('odd');
        return num;
    }
}