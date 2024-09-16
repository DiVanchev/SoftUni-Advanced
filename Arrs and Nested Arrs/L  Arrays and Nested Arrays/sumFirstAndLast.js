function firstAndLast(arr) {
  let first = 0;
  let last = 0;

  first = arr.shift();
  last = arr.pop();

  let sum = Number(first) + Number(last);

  return sum;
}
console.log(firstAndLast(["20", "30", "40"]));
