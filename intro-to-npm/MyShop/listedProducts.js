var faker = require("faker");

console.log("====================");
console.log("WELCOME TO MY SHOP!");
console.log("====================");

console.log(faker.commerce.productName() + " - " + faker.commerce.price());
