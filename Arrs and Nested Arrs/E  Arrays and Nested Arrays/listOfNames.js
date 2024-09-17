function listOfNames(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    arr.forEach((name, index) => {
        console.log(`${index + 1}.${name}`);
    });
}
listOfNames(["John", "Bob", "Christina", "Ema"]);