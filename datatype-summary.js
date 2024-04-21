// Primitive

// 7 types : String, NUmber, Boolean, null, Symbol,
//BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 23344656564635455234n  //bigInt



//Reference (Non Primitive)

//Array, Objects, Functions 

const heroes = ["shaktoman", "batman", "superman"];
let myObj ={
    name: "kirti",
    age: 21,
}

const myFunc = function(){
      console.log("Hello");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunc);
console.log(typeof anotherId);

/**JavaScript is a dynamically typed language.
 *  This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it.
 *  You can assign different types of values to a variable during its lifetime. */