function mathOperations(input1, input2, operation) {
    if (operation === '+'){
        console.log(input1 + input2);
    } else if (operation === '-'){
        console.log(input1 - input2);
    } else if (operation === '*'){
        console.log(input1 * input2);
    } else if (operation === '/'){
        console.log(input1 / input2);
    } else if (operation === '%'){
        console.log(input1 % input2);
    } else if (operation === '**'){
        console.log(input1 ** input2);
    }
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');