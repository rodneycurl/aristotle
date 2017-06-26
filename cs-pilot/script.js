class List {
  constructor(size) {
    var DEFAULT_SIZE = 10;

    // Create a fixed-size array.
    this.data = new Array(DEFAULT_SIZE);
    this.size = 0;
  }
  append(item) {
  this.data[this.size] = item;
  this.size++;
  }
}

var myList = new List();

myList.append("Yay!");

console.log("Total size:", myList.size);
