function pieceOfPie(arr, start, end) {
  let fIndex = arr.indexOf(start);
  let sIndex = arr.indexOf(end) + 1;

  const result = arr.slice(fIndex, sIndex)
  return result;
}
console.log(
  pieceOfPie(
    [
      "Pumpkin Pie",
      "Key Lime Pie",
      "Cherry Pie",
      "Lemon Meringue Pie",
      "Sugar Cream Pie",
    ],
    "Key Lime Pie",
    "Lemon Meringue Pie"
  )
);
