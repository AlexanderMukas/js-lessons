//// 14. Observer (publisher / subscriber)
// one to many dependencies


class Subject {
    constructor(){
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter( obs => obs !== observer);
    }

    fire(action) {
        this.observers.forEach( obs => {
            observer.update(action);
        });
    }
}

class Observer{
    constructor(state) {
        this.state = state;
        this.initialState = state;
    }

    update(action) {
        switch(action.type) {
            case 'INCREMENT'

        }
    }
}
