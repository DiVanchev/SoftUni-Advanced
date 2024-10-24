class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(number) {
        const newValue = this.value + (number instanceof Hex ? number.value : number);
        return new Hex(newValue);
    }

    minus(number) {
        const newValue = this.value - (number instanceof Hex ? number.value : number);
        return new Hex(newValue);
    }

    static parse(string) {
        return parseInt(string, 16);
    }
}


let FF = new Hex(255);
console.log(FF.toString()); // Output: 0xFF
console.log(FF.valueOf() + 1 == 256); // Output: true

let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString()); // Output: 0xF
console.log(a.plus(b).toString() === '0xF'); // Output: true

console.log(Hex.parse('AAA')); // Output: 2730
