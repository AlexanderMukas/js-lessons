const person = {
    name: 'Alexander',
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

    //4:11:28 
    keysAndValues() {
        Object.keys(this).forEach( key => {
            console.log(`${key} : ${this[key]}`);
        })
        
    },
    withParams(top = false, between = false, bottom = false) {
        if(top){
            console.log('----- START -----');
        };

        Object.keys(this).forEach( key => {
            console.log(`${key} : ${this[key]}`);

            if(between){
                console.log('-----------------');
            }
        })
        if(bottom){
            console.log('------ END ------');
        };

    }
}

// logger.keys.call(person);
// logger.keysAndValues.call(person);
let top = true;
let between = true;
let bottom = true;

// call(this, param1, param2, param3)
logger.withParams.call(person, top, between, bottom);
