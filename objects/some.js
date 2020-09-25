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

