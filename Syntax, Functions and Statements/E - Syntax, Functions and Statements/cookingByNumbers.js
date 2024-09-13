function cookingByNumbers(str, arg1, arg2, arg3, arg4, arg5) {
    let num = Number(str);

    let opArr = [arg1, arg2, arg3, arg4, arg5];
    const operationObj = {
        "chop": (a)=> a / 2,
        "dice": (a)=> Math.sqrt(a),
        "spice": (a)=> a + 1,
        "bake": (a)=> a * 3,
        "fillet": (a)=> a * 0.80
   }

   opArr.forEach(op => {
        num = operationObj [op](num);
        console.log(num);
        
   });
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');