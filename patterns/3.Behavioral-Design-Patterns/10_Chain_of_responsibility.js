// 10. Chain of responsibility

class MySum {
    constructor(initialValue = 0) {
        this.sum = initialValue;
    }

    add(value) {
        this.sum += value;
        // add pattern
        return this;
    }

    sub(value){
        this.sum -= value;
        // add pattern
        return this;
    }
}

const sum1 = new MySum();

// console.log( sum1.add(8) ); // undefined, not return anything
console.log( sum1.add(8).add(2).add(5).sum ) // 8+2+5 => 15
console.log( sum1.sub(8).add(2).add(7).sum ) // 15-8+2+7 = 1