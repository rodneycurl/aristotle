class List {
  constructor(size) {
    var DEFAULT_SIZE = 10;

    // Create a fixed-size array.
    this.data = new Array(DEFAULT_SIZE);
    this.size = 0;
  }
}

var myList = new List();

console.log("Total size:", myList.size);
