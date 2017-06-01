// Print all numbers between -10 and 19
console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
var counter = -10;

while(counter < 20) {
  console.log(counter);
  counter++;
}

// Print all even numbers between 10 and 40
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
var counter = 10;

while(counter <= 40) {
  console.log(counter);
  counter+=2;
}

// Print all odd numbers between 300 and 333
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
var counter = 300;

while(counter <= 333) {
  if(counter % 2 !== 0) {
  console.log(counter);
  }
  counter+=1;
}

// Print all numbers divisible by 5 AND 3 between 5 and 50
