//1. isEven function

// function isEven(num){
//   //return true if even
//   if(num % 2 === 0) {
//     return true;
//   }
//   //return false otherwise
//   else {
//     return false
//   }

//1.2 isEven function refactored
function isEven(num){
    return num % 2 === 0;
  }

//2. Factorial
function factorial(num){
  //define a result variable
  var result = 1;
  //calculate factorial and store value in result
  for(var i = 2; i <= num; i++){
    result *= i;
  }
  //return the result variable
  return result;
}

// factorial(4) 4 x 3 x 2 x 1
