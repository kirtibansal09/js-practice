let score = "33abc"

console.log(typeof score);
console.log(typeof (score)); //can write it as a method in parathesis

let valueInNumber = Number(score)
console.log(valueInNumber);


//"33" => 33
//"33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let booleanLOggedIn = Boolean(isLoggedIn)
console.log(booleanLOggedIn);

// 1=> true; 0 => false
// " " = false
// "kirti" => true

let someNumber = 33
let staringNumber  = String(someNumber)
console.log(staringNumber);
console.log(typeof staringNumber);