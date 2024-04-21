console.log(2>1);
console.log("2">1);  // when we compare make sure they both have same datatype
console.log(("02">1));

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// the reason is that an equity check == and comparisons > < >= <= work differently.
// comparisons convert null to a number, treating it as 0.
// That's why (3) null>=0 is true and null >0 is false.


console.log(undefined ==0);
console.log(undefined>0);
console.log(undefined<0);

// ==== strict check
console.log("2"===2); // will not convert since diff data type