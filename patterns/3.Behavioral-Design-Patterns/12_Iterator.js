// 12. Iterator 

class MyIterator {
    constructor( data ){ 
        this.index = 0;
        this.data = data;
    }

    //new Symbol method

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value : this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0;
                    return {
                        done: true,
                        value: void 0  // of undefined
                    }
                }
            }
        }
    }
} 
//generators
function* generator(collection) {
    let index = 0;

    while (index < collection.length) {
        yield collection[index++];
    }
}

const iterator = new MyIterator(['This', 'is', 'iterator']);
// for (const val of iterator) {
//     console.log('VALUE: ', val);
// }

const gen = generator( ['This', 'is', 'iterator'] )
// for (const val of gen) {
//     console.log('VALUE: ', val);
// }

//// or this realization
console.log( gen.next().value );  //This
console.log( gen.next().value );  //is
console.log( gen.next().value );  //iterator

