(function() {
    String.prototype.ensureStart = function(str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function(str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function() {
        return this.length === 0;
    };

    String.prototype.truncate = function(n) {
        if (n < 4) {
            return '.'.repeat(n);
        }

        if (this.length <= n) {
            return this.toString();
        }

        const lastSpaceIndex = this.substring(0, n - 3).lastIndexOf(' ');
        if (lastSpaceIndex !== -1) {
            return this.substring(0, lastSpaceIndex) + '...';
        }

        return this.substring(0, n - 3) + '...';
    };

    String.format = function(string, ...params) {
        return string.replace(/{(\d+)}/g, (match, index) => {
            return index < params.length ? params[index] : match;
        });
    };
})();


let str = 'my string';
str = str.ensureStart('my');
console.log(str);

str = str.ensureStart('hello ');
console.log(str);

str = str.truncate(16);
console.log(str);

str = str.truncate(14);
console.log(str);

str = str.truncate(8);
console.log(str);

str = str.truncate(4);
console.log(str);

str = str.truncate(2);
console.log(str);

str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str);

str = String.format('jumps {0} {1}', 'dog');
console.log(str);
