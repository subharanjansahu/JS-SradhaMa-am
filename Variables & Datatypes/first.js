// console.log("Apna college");
// console.log("Welcome Subha")

// variable
/*
full_Name = 'Tony Strak';
console.log(full_Name);
age = 24;
console.log(age);
price =45.65;
console.log(price);
x = null;
console.log(x)
y = undefined
console.log(y)
*/


/*
// let, const & var
// let :- can not be redeclared but can be updated. A block scope variable.
let fullName = "Tony Stark";
let age = 28;
console.log(age);
// let age = 56;  //this is not allow(redeclared)
age = 56    //this is allow (updated)
let a;
console.log(a);   //undefined
a = 29;
console.log(a);   //29
console.log(fullName);
console.log(age);

// var :- It can be redeclared & updated. A global scope variable.(use before 2015 not now)
var rollNo = 71;
var rollNo = 57;  //redeclared
rollNo = 84;     //updated
console.log(rollNo);    // 84

// const :-Can not be redeclared or updated and it must be initialised. A block scope variable.
const pin = 756114
// const pin = 8589   //redeclared
// pin = 756115    //updated  
console.log(pin);
*/


// Type of variables
let age = 24;
console.log(typeof age)
let name = "subha";
console.log(typeof name);
let isFollow = true
console.log(typeof isFollow)
let x;
console.log(typeof x);
let y = null;
console.log(typeof y)
let a = BigInt(123);
console.log(a, typeof a);
let b = Symbol("Hello");
console.log(b,typeof b);

// non-primitive 

const Student = {
  name : 'Karan',
  age : 24,
  cgpa : 8.4,
  isPass : true,
};
console.log(Student);
console.log(typeof Student);
console.log(Student['name']);
console.log(Student['age']);
console.log(Student.name);
Student.age = Student['age'] + 2;
console.log(Student.age);