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

    // keysAndValues() {
    //     Object.keys(this).forEach( (key) => {
    //         console.log(`key: ${this[key]}`);
    //     })
        
    // }
}

logger.keys.call(person);
