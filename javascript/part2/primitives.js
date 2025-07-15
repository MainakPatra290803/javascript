
//Number
let balance = 1200;
let anotherBalance = new Number(120);

console.log(balance);
console.log(anotherBalance);
console.log(balance.valueOf());
console.log(anotherBalance.valueOf());
console.log(typeof balance);
console.log(typeof anotherBalance);

//Boolean
let isActive = true;
let isReallyActive = new Boolean(true);//not recommended

//null and undefined
let firstname = null;
let lastname = undefined;
console.log(firstname);
console.log(lastname);

//String
let myString = "Hello";
let myStringOne = "Hola";
let username = "Mainak";

let oldGreet = myString + " " +"Mainak";
console.log(oldGreet);
///string interpolation it is easier than the above method
let greetMessage = `Hello ${username} !`;
console.log(greetMessage);

//symbol
let sm1 = Symbol();
let sm2 = Symbol();
console.log(sm1);
console.log(sm2);
console.log(sm1 == sm2);