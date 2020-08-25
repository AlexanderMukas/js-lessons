// function

function myFunc(Obj){
    Obj.brand = "Toyota";
}

/* new var myCar 
*/
let myCar = {
    brand: "BMW",
    model: "340d",
    year: 1995
};
console.log(`My car is - ${myCar.brand} ${myCar.model} `);

myFunc(myCar); // rewrite variable brand
console.log(myCar);

let x = 20;
x = x => {return x * 20;}
console.log(x);

var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  materials.map(function(material) { 
    return material.length; 
  }); // [8, 6, 7, 9]
  
  materials.map((material) => {
    return material.length;
  }); // [8, 6, 7, 9]
  
  materials.map(material => material.length); // [8, 6, 7, 9]