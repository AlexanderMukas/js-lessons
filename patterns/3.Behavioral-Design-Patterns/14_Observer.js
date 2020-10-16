//// 14. Observer (publisher / subscriber)
// one to many dependencies


class Subject {
    constructor(){
        this.observers = [];
    };

    subscribe(observer) {
        this.observers.push(observer);
    };

    unsubscribe(observer) {
        this.observers = this.observers.filter( obs => obs !== observer);
    };

    fire(action) {
        this.observers.forEach( observer => {
            observer.update(action);
        });
    };
};

class Observer{
    constructor(state = 1) {
        this.state = state;
        this.initialState = state;
    };

    update(action) {
        switch(action.type) {
            case 'INCREMENT':
                this.state = ++this.state;
                break
            case 'DECREMENT':
                this.state = --this.state;
                break
            case 'ADD':
                this.state += action.payload;
                break
            default: 
                this.state = this.initialState;
        };
    };
};

//async dynamic
const stream$ = new Subject();

const obs1 = new Observer();
const obs2 = new Observer(42);

stream$.subscribe(obs1);
stream$.subscribe(obs2);

stream$.fire( {type: 'INCREMENT'} ); // all abs ++
stream$.fire( {type: 'INCREMENT'} );
stream$.fire( {type: 'DECREMENT'} );
stream$.fire( {type: 'ADD', payload: 100} );


console.log('obs1.state :', obs1.state ); 
console.log('obs2.state :', obs2.state ); 