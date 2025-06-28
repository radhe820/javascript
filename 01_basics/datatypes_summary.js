// primitive

// 7 types: string, number , boolean , null , undefined , symbol , bigInt


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 6987659876548916879n


// reference (non premitive)

//  array , objects , functions


const heros = ["shaktimaan" , "naagraj" , "doga"];

let myObj = {
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);