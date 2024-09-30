function townPopulation(arr) {
  const result = {};

  for (const town of arr) {
    let [name, population] = town.split(" <-> ");

    population = Number(population);

    if (result.hasOwnProperty(name)) {
      result[name] += population;
    } else {
      result[name] = population;
    }
  }

  for (const name in result) {
    console.log(name, ":", result[name]);
  }
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
