function solution(num) {
  return function (additionalNum) {
    return num + additionalNum;
  };
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
