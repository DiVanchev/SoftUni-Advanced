function sortingNumbers(arr) {
    arr.sort((a, b) => a - b)
    let result = [];
    let length = Math.floor(arr.length / 2);

    for (let i = 0; i < length; i++) {
        result.push(arr[i]);
        result.push(arr[arr.length - (i + 1)]);
        if (arr.length % 2 !== 0 && i + 1 === length) {
            result.push(arr[arr.length - (i + 2)]);
        }
    }
    return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
//console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));
