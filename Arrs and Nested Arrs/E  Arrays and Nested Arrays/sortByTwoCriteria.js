function sortByTwoCriteria(arr) {
    arr.sort((a, b) => {
        const lengthDifference = a.length - b.length;
        if (lengthDifference !== 0) {
            return lengthDifference;
        }
        return a.localeCompare(b)
    });
    return arr.join('\n');
}
console.log(sortByTwoCriteria(["alpha", "beta", "gamma"]));
