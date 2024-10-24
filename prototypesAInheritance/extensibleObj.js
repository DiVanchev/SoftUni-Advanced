function extensibleObject() {
    const obj = {
        extend(template) {
            for (let key in template) {
                if (typeof template[key] === 'function') {
                    Object.getPrototypeOf(obj)[key] = template[key];
                } else {
                    obj[key] = template[key];
                }
            }
        }
    };
    return obj;
}


const myObj = extensibleObject();

const template = {
    extensionMethod: function () { console.log('I am an extension method'); },
    extensionProperty: 'someString'
};

myObj.extend(template);

console.log(myObj.extensionProperty); // Output: 'someString'
myObj.extensionMethod(); // Output: 'I am an extension method'
