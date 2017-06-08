//use an array to model todo list
var todos = ["Buy New Turtle"];

//ask user for input
var input = prompt("What would you like to do?");

while(input !== "quit"){
  //handle input
  if(input === "list") {
    listTodos();
  } else if(input === "new") {
    //ask user for new todos
    var newTodo = prompt("Enter new todo");
    //add to todos array
    todos.push(newTodo);
    console.log("Added Todo");
  } else if(input === "delete"){
    //ask for index of todo to be deleted
    var index = prompt("Enter index of todo to delete");
    //delete that todo
    //splice()
    todos.splice(index,1);
    console.log("Deleted Todo");
  }

  //ask again for new input
  input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function listTodos(){
  console.log("**********")
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
  });
  console.log("**********")
}

//learned to build a simple todo list using javascript

// how to add/sort content in an array: push, pop, shift, unshift, slice
