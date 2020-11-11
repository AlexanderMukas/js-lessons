const person = {
    name: 'Alexander',
    lastName: 'Mukas',
    age: '31',
    isProgrammer: true,
    languages: ['ukrainian', 'russian', 'english'],
    greet(){
        console.log('Greet from person!')
    }
};

// person.greet();

// person.languages.forEach(lang => {
//     console.log(`This person know ${lang}`);
// });

const logger = {
    keys() {
        console.log('Object Keys:', Object.keys(this) )
    },

    /// 4:11:28 
    keysAndValues() {
        Object.keys(this).forEach( key => {
            console.log(`${key} : ${this[key]}`);
        })
        
    },
    withParams(top = false, between = false, bottom = false) {
        if(top){
            console.log('----- START -----');
        };

        Object.keys(this).forEach( (key, index, array) => {
            console.log(`${index} ||| ${key} : ${this[key]}`);

            /// index = array.length - 1 -> this is last element of array
            if(between && index !== array.length - 1){
                console.log('-----------------');
            }
        })
        if(bottom){
            console.log('------ END ------');
        };

    }
}
// bind, call, apply function of Object

// const bound = logger.keys.bind(person);
// bound();

// logger.keys.call(person);
// logger.keysAndValues.call(person);
let top = true;
let between = true;
let bottom = true;

/// call(this, param1, param2, param3)
// logger.withParams.call(person, top, between, bottom);
logger.withParams.apply(person, [top, between, bottom] );
