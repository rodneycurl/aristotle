//objects format example

var car = {
  year: "2017",
  make: "Range Rover",
  color: "Silver"
};

//example of array of posts (nested)

var post = [
  {
    title: "NBA Finals",
    author: "Stephen A. Smith",
    comments: ["Awesome post", "terrible post"]
  },
  {
    title: "The Cavs In 7",
    author: "Skip A. Bayless",
    comments: ["<3", "Whattttt????"]
  }
]

//example of array of movie objects (nested) using movieDB

var movie = [
  {
    title: "Friday",
    rating: "5 stars",
    hasWatched: "You have watched "
  },
  {
    title: "Next Friday",
    rating: "4.5 stars",
    hasWatched: "You have watched "
  },
  {
    title: "Friday After Next",
    rating: "3.5 stars",
    hasWatched: "You have watched "
  },
  {
    title: "Are We There Yet 5",
    rating: "1.2 stars",
    hasWatched: "You have not seen "
  }
]
movie.forEach(function(movie){
  var result = "You have "
  if(movie.hasWatched){
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " ";
  console.log(result)
})
