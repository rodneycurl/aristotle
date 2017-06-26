class List {
  constructor(size) {
    var DEFAULT_SIZE = 10;

    // Create a fixed-size array. Start the size at zero.
    this.data = new Array(DEFAULT_SIZE);
    this.size = 0;
  }

  append(item) {
    if (this.size >= this.data.length) {
      this.growArray();
      console.log("Fixed size array grew from " + this.size + " to " + this.data.length);
    }

    this.data[this.size] = item;
    this.size++;
  }


  growArray() {
    //create a new array twice as big as the current array
    var newArray = new Array(this.data.length * 2);
    
    //copy everything from the old array to the new array
    for (var i = 0; i < this.data.length; i++) {
      newArray[i] = this.data[i];
    }

    //replace the reference from the old array to the new array
    this.data = newArray;
  }


  get(index) {
    return this.data[index];
  }
}


// Create the list
var myList = new List();

myList.append("Yay!");
for (var i = 0; i < 100; i++) {
  myList.append(i);
}

// Iterate over each index of the list and print its values out.
console.log("Total size:", myList.size);
for (var i = 0; i < myList.size; i++) {
  var value = myList.get(i);
  console.log(value, "at index", i);
}
