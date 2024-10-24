const { expect } = require('chai');
const PaymentPackage = require('./PaymentPackage');

describe('PaymentPackage', function() {
    describe('Constructor', function() {
        it('should instantiate with valid parameters', function() {
            const pkg = new PaymentPackage('HR Services', 1500);
            expect(pkg.name).to.equal('HR Services');
            expect(pkg.value).to.equal(1500);
            expect(pkg.VAT).to.equal(20);
            expect(pkg.active).to.be.true;
        });

        it('should throw an error if only one parameter is provided', function() {
            expect(() => new PaymentPackage('HR Services')).to.throw('Value must be a non-negative number');
        });

        it('should throw an error if name is not a string', function() {
            expect(() => new PaymentPackage(123, 1500)).to.throw('Name must be a non-empty string');
        });

        it('should throw an error if name is an empty string', function() {
            expect(() => new PaymentPackage('', 1500)).to.throw('Name must be a non-empty string');
        });

        it('should throw an error if value is not a number', function() {
            expect(() => new PaymentPackage('HR Services', '1500')).to.throw('Value must be a non-negative number');
        });

        it('should throw an error if value is a negative number', function() {
            expect(() => new PaymentPackage('HR Services', -1500)).to.throw('Value must be a non-negative number');
        });
    });

    describe('Accessors', function() {
        let pkg;
        beforeEach(() => {
            pkg = new PaymentPackage('HR Services', 1500);
        });

        describe('name', function() {
            it('should get the name', function() {
                expect(pkg.name).to.equal('HR Services');
            });

            it('should set a new valid name', function() {
                pkg.name = 'Consulting';
                expect(pkg.name).to.equal('Consulting');
            });

            it('should throw an error when setting an invalid name', function() {
                expect(() => pkg.name = 123).to.throw('Name must be a non-empty string');
                expect(() => pkg.name = '').to.throw('Name must be a non-empty string');
            });
        });

        describe('value', function() {
            it('should get the value', function() {
                expect(pkg.value).to.equal(1500);
            });

            it('should set a new valid value', function() {
                pkg.value = 2000;
                expect(pkg.value).to.equal(2000);
            });

            it('should throw an error when setting an invalid value', function() {
                expect(() => pkg.value = 'string').to.throw('Value must be a non-negative number');
                expect(() => pkg.value = -500).to.throw('Value must be a non-negative number');
            });

            it('should allow value to be set to 0', function() {
                pkg.value = 0;
                expect(pkg.value).to.equal(0);
            });
        });

        describe('VAT', function() {
            it('should get the default VAT', function() {
                expect(pkg.VAT).to.equal(20);
            });

            it('should set a new valid VAT', function() {
                pkg.VAT = 15;
                expect(pkg.VAT).to.equal(15);
            });

            it('should throw an error when setting an invalid VAT', function() {
                expect(() => pkg.VAT = '20%').to.throw('VAT must be a non-negative number');
                expect(() => pkg.VAT = -5).to.throw('VAT must be a non-negative number');
            });
        });

        describe('active', function() {
            it('should get the default active status', function() {
                expect(pkg.active).to.be.true;
            });

            it('should set a new valid active status', function() {
                pkg.active = false;
                expect(pkg.active).to.be.false;
            });

            it('should throw an error when setting an invalid active status', function() {
                expect(() => pkg.active = 'yes').to.throw('Active status must be a boolean');
                expect(() => pkg.active = null).to.throw('Active status must be a boolean');
            });
        });
    });

    describe('toString()', function() {
        it('should return a correct string representation for active packages', function() {
            const pkg = new PaymentPackage('HR Services', 1500);
            const expected = [
                'Package: HR Services',
                '- Value (excl. VAT): 1500',
                '- Value (VAT 20%): 1800'
            ].join('\n');
            expect(pkg.toString()).to.equal(expected);
        });

        it('should return a correct string representation for inactive packages', function() {
            const pkg = new PaymentPackage('HR Services', 1500);
            pkg.active = false;
            const expected = [
                'Package: HR Services (inactive)',
                '- Value (excl. VAT): 1500',
                '- Value (VAT 20%): 1800'
            ].join('\n');
            expect(pkg.toString()).to.equal(expected);
        });

        it('should reflect changes in VAT correctly', function() {
            const pkg = new PaymentPackage('HR Services', 1500);
            pkg.VAT = 10;
            const expected = [
                'Package: HR Services',
                '- Value (excl. VAT): 1500',
                '- Value (VAT 10%): 1650'
            ].join('\n');
            expect(pkg.toString()).to.equal(expected);
        });

        it('should reflect changes in value correctly', function() {
            const pkg = new PaymentPackage('HR Services', 1500);
            pkg.value = 1000;
            const expected = [
                'Package: HR Services',
                '- Value (excl. VAT): 1000',
                '- Value (VAT 20%): 1200'
            ].join('\n');
            expect(pkg.toString()).to.equal(expected);
        });
    });
});
