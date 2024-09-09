// Arithmetic Operators
let a = 5;
let b = 3;

/*
console.log("a = ",a,"& b = ",b);
console.log("a + b = ",a + b);
console.log("a - b = ",a - b);
console.log("a * b = ",a * b);
console.log("a / b = ",a / b);
console.log("a % b = ",a % b);
console.log("a ^ b = ",a ** b);
*/

/*
// Unary operators
console.log("a = ",a++);  //post incerments
console.log("a = ",a);
console.log("b = ",++b);  //pre increments
console.log("a = ",a--);  //post decerments
console.log("a = ",a);
console.log("b = ",--b);  //pre decrements
*/

/*
// Assignment Operators
console.log("a = ",a = b);
console.log("a = ",a+=2);
console.log("a = ",a-=2);
console.log("b = ",b*=3);
console.log('b = ',b%=3);
console.log("a = ",a**=2);
*/


/*
// Comparison Operators
let x = 123;
let y = '123';
let z = 1234;

console.log("x == y",x == y);
console.log("x === y",x === y);
console.log("x != y",x != y);
console.log("x !== y",x !== y);
console.log("x >= y",x >= y);
console.log("x < z",x < z);
*/


/*
// Ternary Operators
let age = 25;

age >= 18 ? console.log("Adult") : console.log("Not adult");
// or
let res = age >= 18 ? "Adult" : "Not adult";
console.log(res);
*/


// Conditional Statement
let mode = "pink"
let color;

if(mode === "pink"){
  color = "Pink";
}else if(mode === "dark"){
  color = 'Dark';
}else if(mode === 'blue'){
  color = 'Blue';
}else {
  color = "Light"
}
console.log(color);