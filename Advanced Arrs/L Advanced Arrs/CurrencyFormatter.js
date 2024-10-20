function currencyFormatter(separator, symbol, symbolFirst, value) {
  let result = Math.trunc(value) + separator;
  result += value.toFixed(2).substr(-2, 2);
  if (symbolFirst) return symbol + " " + result;
  else return result + " " + symbol;
}

function createFormatter(separator, symbol, symbolFirst, formatter) {
  return function (value) {
    return formatter(separator, symbol, symbolFirst, value);
  };
}

let dollarFormatter = createFormatter(",", "$", true, currencyFormatter);

console.log(dollarFormatter(5345.23));
console.log(dollarFormatter(12.5)); 
console.log(dollarFormatter(1000)); 
