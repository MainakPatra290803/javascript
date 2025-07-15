//OBJECT
let username = {
    firstname: "Mainak",
    isLoggedin: true,
};//object


console.log(username);
console.log(username.firstname);
console.log(username.isLoggedin);
console.log(typeof username);

username.firstname = "Mr. M";
username.lastname = "Patra";//we can add additional properties
console.log(username.firstname);//so in object we can change the values
console.log(username.lastname);
console.log(username);

//if we want to give spaces in our variable we should enclose it in [] bracket
let UserCredential = {
    "First Name": "Manish",
    "Last Name": "patra",
};
console.log(UserCredential["First Name"]);
console.log(UserCredential["Last Name"]);
console.log(UserCredential);

//ARRAY
let heroes = ["a","b","c",true,];//different datatypes can be possible
console.log(heroes);
console.log(heroes[0]);
console.log(heroes[1]);
console.log(heroes[2]);
console.log(heroes[3]);

//-----------------------------------
//explicit type conversion
let isValue = true;
console.log(Number(isValue) + 1);//2 --> (1+1)
console.log(typeof Number(isValue));

let isVal = "2abc";
console.log(Number(isVal));//NaN(Not a Number)
console.log(typeof Number(isVal));//number