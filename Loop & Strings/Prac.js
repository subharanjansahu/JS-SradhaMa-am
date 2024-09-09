// Print all even no. from 0 to 100.
/*
let count = 0;
for(let i=0;i<=100;i++){
  if(i % 2 === 0){
    console.log(i);
    count++;
  }
}
console.log("There are",count,"even numbers placed in between 0 t0 100");
*/

// Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.
/*
let num = 27;
let i = 1;
while (true) {
  let guessingNum = prompt("Ent a num bet:");
  if (guessingNum < num) {
    console.log("Try again");
  } else if (guessingNum > num) {
    console.log("Ent num bet 0-", guessingNum);
  } else {
    console.log("You are correct");
    break;
  }
  i++;
}
*/


// STRINGS

// Prompt the user to enter their full name. Generate a username for them based on the input.
// Start user name with @, followed by their fullname and ending with the fullname length.
// e.g:- Shradhakhapra  ->  @Shradhakhapra13
let user_name = prompt("Enter your name:");
let size = user_name.length;
console.log(`Your user name is @${user_name}${size}`);