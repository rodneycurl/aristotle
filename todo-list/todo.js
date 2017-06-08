//use an array to model todo list
var todos = ["Buy New Turtle"];

//ask user for input
var input = prompt("What would you like to do?");

while(input !== "quit"){
  //handle input
  if(input === "list") {
    console.log(todos);
  } else if(input === "new") {
    //ask user for new todos
    var newTodo = prompt("Enter new todo");
    //add to todos array
    todos.push(newTodo);
  }
  //ask again for new input
  input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

//learned to build a simple todo list using javascript

// how to add/sort content in an array: push, pop, shift, unshift, slice
