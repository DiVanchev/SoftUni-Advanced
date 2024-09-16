function biggerHalf(arr) {
    arr.sort((a, b) => a - b);
    let middle = arr.length / 2;
    let secondHalf = arr.slice(middle);
   
    return secondHalf;    
}
console.log(biggerHalf([4, 7, 2, 5]));