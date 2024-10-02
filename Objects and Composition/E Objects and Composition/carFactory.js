function carFactory(carsObj) {
    const { model, power, color, carriage, wheelsize } = carsObj;

    const smallEngine = { power: 90, volume: 1800 };
    const normalEngine = { power: 120, volume: 2400 };
    const monsterEngine = { power: 200, volume: 3500 };
    
    if (power <= 90) {
        carsObj.engine = smallEngine;
    } else if (power <= 120) {
        carsObj.engine = normalEngine;
    } else {
        carsObj.engine = monsterEngine;
    }

   
    if (carriage === 'hatchback') {
        carsObj.carriage = { type: 'hatchback', color: color };
    } else if (carriage === 'coupe') {
        carsObj.carriage = { type: 'coupe', color: color };
    }

    let adjustedWheelSize = wheelsize % 2 === 0 ? wheelsize - 1 : wheelsize;
    carsObj.wheels = [adjustedWheelSize, adjustedWheelSize, adjustedWheelSize, adjustedWheelSize];

    return carsObj;
}

const car1 = {
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
};

const car2 = {
    model: 'Brichka',
    power: 65,
    color: 'white',
    carriage: 'hatchback',
    wheelsize: 16
};


console.log(carFactory(car1));
