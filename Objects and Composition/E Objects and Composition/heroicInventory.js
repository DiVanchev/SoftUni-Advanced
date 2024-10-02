function heroicInventory(arr) {
    let result = [];

    for (const iterator of arr) {
        let [name, level, items] = iterator.split(' / ')
        level = Number(level);
        items = items ? items.split(', ') : [];

        if (name && level && items) {
            result.push({name, level, items});
        }
    }
    return JSON.stringify(result);
}
console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
    ));