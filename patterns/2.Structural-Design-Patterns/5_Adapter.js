// 5. Adapter

class OldCalc {
    operations(t1, t2, operation) {
        switch(operation) {
            case 'add': return t1 + t2;      // x+y
            case 'sub': return t1 - t2;      // x-y
            default: return NaN;           
        };
    };
};

class NewCalc {
    add(t1, t2) {
        return t1 + t2;
    };

    sub(t1, t2) {
        return t1 - t2;
    };
};

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc();
    }

    operations(t1, t2, operation) {
        switch(operation) {
            case 'add': return this.calc.add(t1, t2)      // x+y
            case 'sub': return this.calc.sub(t1, t2);     // x-y
            default: return NaN;           
        };
    };
};

const oldCalc = new OldCalc();
console.log(oldCalc.operations(3, 7, 'add') ); // 10

const newCalc = new NewCalc();
console.log(newCalc.add(3, 7) );               // 10

const adapter = new CalcAdapter();
console.log(adapter.operations(25, 15, 'sub') ); // 10

