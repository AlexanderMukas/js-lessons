let car = {
    color: 'red',
    ride : function() {
        console.log("Car go !..."); }
};

function corolChange(Object){
    Object.color = "violet";
};

console.log(`Color of car is : ${car.color}`);
car.ride();
//colorChange(car);
corolChange(car);
console.log(`Now is color of car is : ${car.color}!!!`);
