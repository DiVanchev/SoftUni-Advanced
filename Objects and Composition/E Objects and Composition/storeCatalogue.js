function storeCatalogue(data) {
    const store = {};

    for (const el of data) {
        let [key, value] = el.split(' : ');
        value = Number(value);
        store[key] = value;
    }
    
    let sortResult = Object.entries(store).sort((arrA, arrB) => arrA[0].localeCompare(arrB));
    let curGroupChar = '';
    for (let [key, value] of sortResult) {
        if (curGroupChar !== key[0]) {
            curGroupChar = key[0]; 
            console.log(curGroupChar);
        }
        console.log(`  ${key}: ${value}`);
    }
    
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
    );