var firstLI = document.querySelector("li");

firstLI.addEventListener("mouseover", function(){
  firstLI.style.color = "green";
});

firstLI.addEventListener("mouseout", function(){
  firstLI.style.color = "black";
});
