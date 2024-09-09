/*
// Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.

let num;
num = prompt("Enter a number: ");

if(num % 5 === 0){
  console.log(num,"is multiple of 5");
}else{
  console.log(num,"is not multiple of 5");
}
*/


//Write a code which can give grades to students according to their scores:
// 90 - 100 -> A, 70 - 89 -> B, 60 - 69 -> C, 50 - 59 -> D, 0 - 49 -> F

let mark = prompt("Enter Mark (0-100):");

if(mark >= 90 && mark < 100){
  console.log(mark,"Grade A");
}else if(mark >= 70 && mark < 89){
  console.log(mark,"Grade B");
}else if(mark >= 60 && mark < 69){
  console.log(mark,"Grade C");
}else if(mark >= 50 && mark < 59){
  console.log(mark,"Grade D");
}else{
  console.log(mark,"Grade F");
}