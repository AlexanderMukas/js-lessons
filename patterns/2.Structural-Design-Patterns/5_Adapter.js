// 5. Adapter

class OldCalc {
    operations(t1, t2, operation) {
        switch(operation) {
            case 'add': return t1 + t2;      // x+y
            case 'sub': return t1 + t2;      // x-y
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