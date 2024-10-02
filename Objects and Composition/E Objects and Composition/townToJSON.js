function townsToJson(towns) {
  let result = [];

  for (let i = 1; i < towns.length; i++) {
    let [empty, town, latitude, longitude] = towns[i]
      .split("|")
      .map((x) => x.trim());

    latitude = Number(parseFloat(latitude).toFixed(2));
    longitude = Number(parseFloat(longitude).toFixed(2));

    result.push({ Town: town, Latitude: latitude, Longitude: longitude });
  }

  console.log(JSON.stringify(result));
}

townsToJson([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
