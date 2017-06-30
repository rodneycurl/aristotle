console.log("Creating List class.");
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
    // Create a new array twice as big as the current array
    var newArray = new Array(this.data.length * 2);

    // Copy everything from the old array to the new array
    for (var i = 0; i < this.data.length; i++) {
      newArray[i] = this.data[i];
    }

    // Replace the reference from the old array to the new array
    this.data = newArray;
  }


  get(index) {
    return this.data[index];
  }

  remove(index) {
    // Just return false if the list is already empty.
    if (this.size == 0) {
      return false;
    }

    // Save the current data at the index so it can be returned at the end.
    var result = this.data[index];


    // Start the element that's supposed to be removed and shift
    // everything over by one.

    for (var i = index; i < this.size - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    // Decrement the total size of the list.
    this.size--;

    return result;
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
