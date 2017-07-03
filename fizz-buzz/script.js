// Write a program that prints the integers from 1 to 100 (inclusive).
  // But:
  // - for multiples of three, print Fizz (instead of the number)
  // - for multiples of five, print Buzz (instead of the number)
  // - for multiples of both three and five, print FizzBuzz (instead of the number)

console.log("version 1")
for (let i = 1; i < 101; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz")
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}

console.log("version 2")
for (var i = 1; i < 101; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  }
  else if(i % 3 === 0){
    console.log("Fizz");
  }
  else if(i % 5 === 0){
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}


  // Desired outcome:
  // 1
  // 2
  // Fizz
  // 4
  // Buzz
  // ...
  // FizzBuzz
  // ...