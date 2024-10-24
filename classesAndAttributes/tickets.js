function juiceFlavors(input) {
    const juices = {};
    const bottles = {};

    input.forEach(line => {
        const [juice, quantity] = line.split(' => ');
        const quantityNumber = Number(quantity);

        if (!juices[juice]) {
            juices[juice] = 0;
        }

        juices[juice] += quantityNumber;

        if (juices[juice] >= 1000) {
            const newBottles = Math.floor(juices[juice] / 1000);
            if (!bottles[juice]) {
                bottles[juice] = 0;
            }

            bottles[juice] += newBottles;
            juices[juice] %= 1000;
        }
    });

    Object.entries(bottles).forEach(([juice, quantity]) => {
        console.log(`${juice} => ${quantity}`);
    });
}


juiceFlavors([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);
