function sameNumbers(num) {
  let stringifiedNum = num.toString();
  let isSame = true;
  let sum = 0;
  let fDigit = stringifiedNum[0];
  for (let i = 0; i < stringifiedNum.length; i++) {
    if (stringifiedNum[i] !== fDigit) {
      isSame = false;
    }
    sum += Number(stringifiedNum[i]);
  }
  console.log(isSame);
  console.log(sum);
}
//sameNumbers(2222222);
sameNumbers(1234);
