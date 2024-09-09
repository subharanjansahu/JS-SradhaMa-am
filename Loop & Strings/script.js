// for loop
/*
for(let i = 1; i <= 5; i++){
  console.log("Apna College");
}
console.log("Loop has ended");
*/

// calculate sum of 1 to n numbers
/*
let n = prompt("Enter a number: ");
let sum = 0;
for(let i = 1;i <= n;i++){
  sum = sum+i;
}
console.log("Sum of 1 to",n,"is =",sum);
*/

// Use while loop
/*
let n = prompt("Enter a number: ");
let sum = 0;
let i = 1;
while(i <= n){
  sum = sum+i;
  i++;
}
console.log("Sum of 1 to",n,"is =",sum);
*/

// for-of loop
/*
let str = "subha";
let length = 0;
for(let s of str){
  console.log(s);
  length++;
}
console.log("String size is =",length);
*/

// for-in loop
let Student = {
  name : "subha",
  rollno : 24,
  sec : "A",
};

for(let key in Student){
console.log("Key =",key,"Value =",Student[key]); 
}