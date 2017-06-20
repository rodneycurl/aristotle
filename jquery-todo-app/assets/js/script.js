//check off specific todos by clicking
$("li").click(function(){
  $(this).toggleClass("completed");
});

//click on x to delete todos
$("span").click(function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//add a listener to the keypress
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
      //grabbing new todo text from input
      var todoText = $(this).val();
      $(this).val("");
      //create a new li and add to ul
      $("ul").append("<li><span>X</span> " + todoText + "</li>");
  }
});
