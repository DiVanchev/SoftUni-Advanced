function calorieObject(arr) {
  const calObj = {};
  let name = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      name = arr[i];
      calories = Number(arr[i + 1]);
      if (!calObj.hasOwnProperty(name)) {
        calObj[name] = calories;
      }
    }
}
console.log(calObj);
}
calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
