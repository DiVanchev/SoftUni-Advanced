function solution() {
    const stock = {
      protein: 0,
      carbohydrate: 0,
      fat: 0,
      flavour: 0
    };
  
    const recipes = {
      apple: { carbohydrate: 1, flavour: 2 },
      lemonade: { carbohydrate: 10, flavour: 20 },
      burger: { carbohydrate: 5, fat: 7, flavour: 3 },
      eggs: { protein: 5, fat: 1, flavour: 1 },
      turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };
  
    return function (command) {
      const [action, item, quantity] = command.split(' ');
  
      if (action === 'restock') {
        stock[item] += Number(quantity);
        return 'Success';
      }
  
      if (action === 'prepare') {
        const recipe = recipes[item];
        const qty = Number(quantity);
        for (const ingredient in recipe) {
          if (stock[ingredient] < recipe[ingredient] * qty) {
            return `Error: not enough ${ingredient} in stock`;
          }
        }
        for (const ingredient in recipe) {
          stock[ingredient] -= recipe[ingredient] * qty;
        }
        return 'Success';
      }
  
      if (action === 'report') {
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
      }
    };
  }
  
  let manager = solution();
  console.log(manager("restock flavour 50")); // Success
  console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
  console.log(manager("restock carbohydrate 10")); // Success
  console.log(manager("restock flavour 10")); // Success
  console.log(manager("prepare apple 1")); // Success
  console.log(manager("restock fat 10")); // Success
  console.log(manager("prepare burger 1")); // Success
  console.log(manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55
  