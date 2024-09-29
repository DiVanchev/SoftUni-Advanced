function cityRecord(name, population, treasury) {
    const cityObj = {
        name: name,
        population: population,
        treasury: treasury
    }
    return cityObj;
}
console.log(cityRecord('Tortuga',
7000,
15000
));