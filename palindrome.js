// functions: push, pop, peak, length
var letters = []; // this is our stack

var word = "kazak"; // example - racecar
var rword = "";      // reverseWord

//put letters of word into stack
for(var i = 0; i < word.length; i++){
    letters.push(word[i]);
}

//pop off the stack in reverse order
for(var i = 0; i <word.length; i++) {
    rword += letters.pop();
}

if(rword === word){
    console.log(`"${word}" is a palidrome word!`);
} else {
    console.log(`"${word}" is NOT a palidrome word!`);
}
