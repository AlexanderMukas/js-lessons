/* Sets */

function mySet(){
    // the var collection will hold the set
    let collection = [];

    //this method will check for the presence of an element and return true or false
    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    };

    //this method will return all the values in the set
    this.values = function(){
        return collection;
    };

    //this method will add an element to the set
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };

    //this method will remove an element from a set
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };

    // this method will return the size of the collection
    this.size = function(){
        return collection.length;
    };

    // this method will return the union of two sets
    this.union = function(otherSet){
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach( element => unionSet.add(element));
        /*
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        */
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };

    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet){
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach( function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        } );
        return intersectionSet;
    };
    

}

const oneSet = new mySet();
const twoSet = new mySet();
let listNum = ["One", "Two", "Three", "Four"];
let listAnimals = ["Dog", "Cat", "Cow", "Lion"];

listNum.forEach( element => oneSet.add(element) );
listAnimals.forEach( element => twoSet.add(element) );

//twoSet.add("Dog");
//twoSet.add("Cat");
//twoSet.add("Cow");
console.log(oneSet.values());
console.log(twoSet.values());

const unSet = oneSet.union(twoSet);
console.log(unSet.values());
console.log(unSet.size());
