const person = {
    name: 'Alexander',
    age: '31',
    isProgrammer: true,
    languages: ['ukrainian', 'russian', 'english'],
    greet(){
        console.log('Greet from person!')
    }
};

person.greet();

person.languages.forEach(lang => {
    console.log(`This person know ${lang}`);
});

const logger = {
    keys() {
        console.log('Object Keys:', Object.keys(this) )
    },
    
    //4:11:28 
    keysAndValues() {
        Object.keys(this).forEach( (key) => {
            console.log(`key: ${key}, value: ${this[key]}`);
        })
        
    }
}

// logger.keys.call(person);
logger.keysAndValues.call(person);
