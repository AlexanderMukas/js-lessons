"use strict";

function show(argument){
    console.log(argument);
}

const date = new Date();
// show(date); // 2020-09-12T16:55:44.027Z

const date2 = new Date().toDateString();
// show(date2)

let options = { weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
};
const date3 = new Date(Date.UTC(2020, 8, 12)); // 12.09.2020
show(date3.toLocaleDateString('ua-UA', options)); 

