// Initial age question
var age = Number(prompt("How old are you?"));

// If and is negative
if(age<0) {
  console.log("Come back once you're out of the womb");
}

// If age is 21
if(age === 21) {
  console.log("Happy 21st Birthday");
}

// If age is <21
if(age<21) {
  console.log("You can't get in. You have to be 21 to get into this nightclub.")
}

// If age is odd
//(not evenly divisible by two)
else if(age % 2 !==0) {
  console.log("Your age is odd!");
}

// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}
