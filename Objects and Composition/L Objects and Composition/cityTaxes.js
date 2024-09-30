function cityTaxes(name, population, treasury) {
  const city = {
    name,
    population,
    treasury,
    taxRate: 10,
  };
  city.collectTaxes = function() {
    this.treasury += Math.floor(this.population * this.taxRate);
  };

  city.applyGrowth = function(percent) {
    this.population += Math.floor(this.population * (percent / 100));
  };

  city.applyRecession = function (percent) {
    this.treasury -= Math.ceil(this.treasury * (percent / 100));
  };
  return city;
}
const result = cityTaxes("Tortuga", 7000, 15000);
console.log(result);
result.collectTaxes();
console.log(result);
result.applyGrowth(5);
console.log(result);
result.applyRecession(7);
console.log(result);
