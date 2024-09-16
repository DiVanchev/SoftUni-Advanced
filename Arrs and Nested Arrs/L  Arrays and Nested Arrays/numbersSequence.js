function numbersSequence(n, k) {
    let newArr = [1];
    n = Number(n);
    k = Number(k);

    for(let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let sum = newArr.slice(start, i).reduce((a, b) => a + b, 0);
        newArr.push(sum);
    }
    return newArr;
}
console.log(numbersSequence(6, 3));