function addRemoveElem(arr) {
  let arrTo = [];
  let num = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "add") {
      arrTo.push(num);
    } else if (arr[i] === "remove") {
      arrTo.pop();
    }
    num++;
  }
  if (arrTo.length === 0) {
    return "Empty";
    
  } else {
    return arrTo.join('\n');
  }
}
console.log(addRemoveElem(["add", "add", "add", "add"]));
console.log(addRemoveElem(["add", "add", "remove", "add", "add"]));
console.log(addRemoveElem(["remove", "remove", "remove"]));
