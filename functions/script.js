//write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise

// 1. isEven FUNCTION
function isEven(num){
  //return true if even
  if(num % 2 === 0) {
    return true;
  }
  //return false otherwise
  else {
    return false
  }
}

//refactored version

function isEven(num){
  if num % 2 === 0;
}

// 2. factorial() FUNCTION
function factorial(num){
  //define a result variable
  var result = 1;
  //calculate factorial and store value in result
  for(var i = 2; i <= num; i++){
    result = result * i;
  }
  //return the result variable
  return result;
}

// factorial(4) 1 x 2 x 3 x 4

// 2.1 factorial() FUNCTION alternative
function factorial(num){
  //define a result variable
  var result = num;
  //calculate factorial and store value in result
  for(var i = num-1; i >= 1; i--){
    result *= i;
  }
  //return the result variable
  return result;
}

// factorial(4) 4 x 3 x 2 x 1
