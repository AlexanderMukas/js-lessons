// 11. Command  (like REDUX)
class MyMath {
    constructor(initValue = 0) {
        this.num = initValue;
    }
    square() { return this.num ** 2};
    cube() { return this.num ** 3};
    increment() { return ++this.num };
    decrement() { return --this.num };
};

class Command {
    constructor( subject ) {
        this.subject = subject;
        this.commandsExecuted = [];    // list all commands
    }

    execute (command) {
        this.commandsExecuted.push(command);
        return this.subject[command]();
    }

    log() { return this.commandsExecuted };
}

const x = new Command( new MyMath(2) );
console.log ( x.execute( 'square') );
console.log ( x.execute( 'cube') );
console.log ( x.execute( 'cube') );
console.log ( x.execute( 'decrement') );
console.log ( x.execute( 'increment') );
console.log ( x.execute( 'decrement') );
console.log( x.commandsExecuted);
console.log( x.log());