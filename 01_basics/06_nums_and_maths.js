const score = 400
console.log(score);

const balance =new Number(100)
console.log(balance);

console.log(balance.toString().length)

console.log(balance.toFixed(2));


const otherNumber = 123.687984

console.log(otherNumber.toPrecision(5));

const hundreds = 10000000
 console.log(hundreds.toLocaleString('en-In'));

/*++++++++++++++++++ Maths ++++++++++++++++++++*/

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,5,6,8,2,3));
console.log(Math.max(5,6,8,5,2,3));


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10 + 1));


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min)