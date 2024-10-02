function lowestPrices(arr) {
    const lowestPrArr = {};
    
    for (const iterator of arr) {
        let [name, product, price] = iterator.split(' | ');
        price = Number(price);
        
        if (!lowestPrArr[product]) {
            lowestPrArr[product] = {name, price};
        } else {
            if (price < lowestPrArr[product].price) {
                lowestPrArr[product] = {name, price};
            }
        }
        
    }
    
    for (const item in lowestPrArr) {
        console.log(`${item} -> ${lowestPrArr[item].price} (${lowestPrArr[item].name})`);
    }
    
}
lowestPrices([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
