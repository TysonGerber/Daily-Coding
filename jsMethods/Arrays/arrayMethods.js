//
                             <=== ARRAY METHODS ===>


  // ***************************************************************************************
  // 								TYSON GERBER
  // ***************************************************************************************

  1. arr.toString()


function Car(brand, name, color, fuel, speed, year) {
  this.name = name;
  this.brand = brand;
  this.color = color;
  this.fuel = fuel;
  this.speed = speed;
  this.year = year;
}

fordFocus = new Car("Ford", "Focus", "Blue", "Regular Unleaded", "80 mph", 2002);

Car.prototype.toString = function carToString() {
  return " This is a " + this.color + " " + this.brand + " " + this.name + ". " + " It's reveal date was " + this.year + ", " + " it's max speed is " + this.speed + " and takes " + this.fuel + " fuel."
}
//console.log(fordFocus.toString()) //This is a Blue Ford Focus.  It's reveal date was 2002,  it's max speed is 80 mph and takes Regular Unleaded fuel.
console.log(fordFocus + " ") // same

// fordFocus is an object and you want to use it as an object, but if you want to print out the STRING (toString() output) rather than the OBJECT ({name:…, brand:…}) you need to use it as a string.  By adding a string to the object, it implicitly converts the object into the string using toString().
//console.log(fordFocus) // outputs the object.
// console.log(fordFocus + “ “) outputs the string (and calls toString() to do that)

2. arr.join() //The join() method joins all elements of an array (or an array-like object) into a string.
var combine = ["H", "e", "l", "l", "o", " ", "A", "l", "e", "x", " ", "a", "n", "d", " ", "C", "h", "a", "r", "l", "i", "e"]
console.log(combine.join("")); //Hello Alex and Charlie

var numbers = [1, 2, 3, 4, 5]
console.log(numbers.join(" + ")); //1 + 2 + 3 + 4 + 5

3. arr.pop() //The pop() method removes the last element of an array, and returns that element.
var names = ["Alex", "Charlie", "Tyson", "Richard"]
console.log(names.pop()); //Richard

4. arr.push() //The push() method adds one or more elements to the end of an array and returns the new length of the array.
var names = ["Alex", "Charlie", "Tyson", "Richard"]
console.log(names.push("Rob")) // 5
console.log(names) //   ["Alex", "Charlie", "Tyson", "Richard", "Rob"]


5. arr.shift()  //The shift() method removes the first element from an array and returns that element. This method changes the length of the array.
var dev = ["I", "am", "a", "FullStack", "Developer"]
console.log(dev.shift()) // I
console.log(dev) //[ 'am', 'a', 'FullStack', 'Developer' ]
console.log(dev.shift()) // am
console.log(dev) //[ 'a', 'FullStack', 'Developer' ]
console.log(dev.shift()) // a
console.log(dev) // [ 'FullStack', 'Developer' ]

6. arr.unshift() //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the new array.
  (continuing of the aobve shift example)
console.log(dev.unshift("are")) // 3
console.log(dev) // [ 'are', 'FullStack', 'Developer' ]
console.log(dev.unshift("We")) // 4
console.log(dev) // [ 'We', 'are', 'FullStack', 'Developer' ]

7. arr.length //not a function()
var combine = ["H", "e", "l", "l", "o", " ", "A", "l", "e", "x", " ", "a", "n", "d", " ", "C", "h", "a", "r", "l", "i", "e"]
console.log(combine.length) // (0-22 includes spaces as an index.) 22     

8. delete arr[0]
// will delete the item at the specified index of the array

var thisArray = ["The", "word", "ME", "will", "be", "deleted"]
delete thisArray[2]
console.log(thisArray) //[ 'The', 'word', undefined, 'will', 'be', 'deleted' ]

//## What is the difference between using the delete operator on the array element as opposed to using the Array.splice method?
//delete will delete the object property, but will not reindex the array or update its length. This makes it appears as if it is undefined:

myArray = ['a', 'b', 'c', 'd'] // ["a", "b", "c", "d"]
delete myArray[0] // true
console.log(myArray)//[undefined, "b", "c", "d"]

9. arr.splice(2, 0)
//removes the items in the given indecies of the array


//Splice(start, deleteCount) actually removes the element from the array:

myArray = ['a', 'b', 'c', 'd'] // ["a", "b", "c", "d"]
myArray.splice(0, 2) // ["a", "b"]
console.log(myArray) // ["c", "d"]


var thisArray = ["The", "word", "ME", "will", "be", "deleted"]
thisArray.splice(2, 1)
console.log(thisArray) //[ 'The', 'word', 'will', 'be', 'deleted' ] //ME was deleted



10. arr.splice(2, 0, 'red', 'green')
//will insert the corresponding strings into the given indecies of the array

var thisArray = ["The", "word", "ME", "will", "be", "deleted"]
thisArray.splice(1, 4, "code", "that", "was", "here", "was")
console.log(thisArray) // [ 'The', 'code', 'that', 'was', 'here', 'was', 'deleted' ]

11. arr.concat(arr2)
//Joins two or more arrays, and returns a copy of the joined arrays

var one = ["Hi", "my", "name", "is", "Tyson"]
var two = ["Gerber", "nice", "to", "concat", "with", "you", "."]


console.log(one.concat(two)) //[ 'Hi','my','name','is', 'Tyson', 'Gerber', 'nice', 'to', 'concat', 'with', 'you', '.' ]
console.log(one.concat(two).join(' ')) //Hi my name is Tyson Gerber nice to concat with you .


// console.log(letters.concat(numbers)) //[ 'number', 'number', 'number', 'number', 1, 2, 3, 4 ]





numbers = [1, 2, 3, 4]
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2)
}

12. newArr = oldArr.slice(3)
//create a new array based on slice point of the old array
var one = ["Hi", "my", "name", "is", "Tyson"]
console.log(one.slice(4))


13. arr.copyWithin()
// Copies array elements within the array, to and from specified positions
var one = ["Hi", "my", "name", "is", "Tyson"]
console.log(one.copyWithin(1, 1))
console.log(one.copyWithin(0,1))
console.log(one.copyWithin(0,2))

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

14. arr.every()
// Checks if every element in an array pass a test

console.log([-10, 0, 10].every(x => x < 0)) //false
console.log([-10, 0, 10].every(x => x < 0)) //false
console.log([1, 2, 3, 4].every(x => x < 0))  //false
console.log([1, 2, 3, 4].every(x => x >= 0))  //true

15. arr.fill()
// Fill the elements in an array with a static value
var one = ["Hi", "my", "name", "is", "Tyson"]
console.log(one.fill(1))
var one = ["Hi", "my", "name", "is", "Tyson"]
console.log(one.fill(1, 1))
var one = ["Hi", "my", "name", "is", "Tyson"]
console.log(one.fill(0,1))
var one = ["Hi", "my", "name", "is", "Tyson"]
console.log(one.fill(0,2))
var one = ["Hi", "my", "name", "is", "Tyson"]
console.log(one.fill(0,3))
var one = ["Hi", "my", "name", "is", "Tyson"]
console.log(one.fill("Alex",4))
var one = ["Hi", "my", "name", "is", "Tyson"]
console.log(one.fill("Alex",2, 3))


16. arr.filter()
// Creates a new array with every element in an array that pass a test

var people = ["Tyson", "Charlie", "Alex", "Tom", "Sara", "Tom", "Paul"]

function findName(names) {
  if (names.length === 4) { // find all the names with the length of 4 and return the array with those names.
    return names
  }
}
console.log(people.filter(findName)) // Alex, Sara, Paul


17. arr.find()
// Returns the value of the first element in an array that pass a test

var people = ["Tyson", "Charlie", "Alex", "Tom", "Sara", "Tom", "Paul"]

function findName(names) {
  if (names.length === 4) { // find the first name with the length of 4.
    return names
  }
}
console.log(people.find(findName)) // Alex


18. arr.findIndex()
// Returns the index of the first element in an array that pass a test

var people = ["Tyson", "Charlie", "Alex", "Tom", "Travis", "Tom"]

function findName(names) {
  if (names === "Tom") {
    return names
  }
}
console.log(people.findIndex(findName)) // 3   [3] The array where the equation passes.


console.log([6, -5, 8].findIndex(x => x < 0)) //1
console.log([6, 5, 8].findIndex(x => x < 0)) // -1 If what your testing doesn't exist then it will return -1




19. arr.lastIndexOf()
// Search the array for an element, starting at the end, and returns its position

var another = ["Test", "One", "Two", "Three", "Test", "One", "Two", "Three",]
console.log(another.lastIndexOf("One")); // 5  index[5]


20. arr.forEach()
// Calls a function for each array element

animals = ['tigers', 'lions', 'bears']

animals.forEach(function (element) {
  element = element + ' I am scared'
  console.log(element)
})


arr.indexOf()
// Search the array for an element and returns its position

arr.isArray()
// Checks whether an object is an array

arr.map()
// Creates a new array with the result of calling a function for each array element
animals = ['tiger', 'lion', 'bear']

console.log(animals.map(function (element) {
  element = element + ' I am scared'
  return element
}))

arr.reduce()
// Reduce the values of an array to a single value (going left-to-right)

arr.reduceRight()
// Reduce the values of an array to a single value (going right-to-left)

arr.reverse()
// Reverses the order of the elements in an array

arr.slice()
// Selects a part of an array, and returns the new array

arr.some()
//Checks if any of the elements in an array pass a test

arr.sort()
// Sorts the elements of an array

arr.splice()
// Adds/Removes elements from an array

arr.valueOf()
// Returns the primitive value of an array









// =======================================================================================
// 			          CHARLIE BECK
// =======================================================================================
//Closure Explained:

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
//https://www.youtube.com/watch?v=yiEeiMN2Khs


//3. Work on these 7 Array Methods
// ==================== arr.toString() =======================
// Convert the array to a string.
arr = [45, "minutes", "to", "Boulder"];

console.log(arr.toString(arr)); // arr = "45, "minutes", "to", "Boulder"

// ==================== arr.join() ===========================

console.log(arr.join(" ")); // arr = "45 minutes to Boulder"

// ==================== arr.pop() ===========================

console.log(arr.pop()); //returns the last string in an array and deletes it. logs Boulder, returns arr = [45, "minutes", "to"]

// ==================== arr.push() ==========================

console.log(arr.push("Pine")); //log returns length. .push method adds to the end of an array.

// ==================== arr.shift() =========================

console.log(arr.shift()); //log returns the 0 index, .shift method removes the 0 index from array.

// ==================== arr.unshift() ======================

console.log(arr.unshift("35")); //log returns the length, .unshift method adds to beggining of array. Differs from .push() in that it adds to beggining instead of end.

// ==================== arr.length() =======================

console.log(arr.length); //.length returns length of the array.

console.log(arr); //after all this. arr ends up as arr = ["35", "minutes", "to", "Pine"]

// =======================================================================================













var sophia = ['Passionate', 'Friendly', 'Fun', 'A Leader']
for (var i = 0; i < sophia.length; i++) {
  console.log("Sophia is " + sophia[i])
}

var sophia = ['Passionate', 'Friendly', 'Fun', 'A Leader', 'The best future Web Developer EVER!!!!']

for (var i = 0; i < sophia.length; i++) {
  console.log("Sophia is " + sophia[i])
}



// if given a specific number in seconds I want the computer to translate it into days hours minutes and seconds. modular division

&& || -- ++ % 

// Asymetric 
 // everyone has keys encrytped with one key and decrypted with another key.

 // Symetric
  // encrypt and decrypt with the same key.  If I cut you in half your one half is exactly the same and the other half.


var animals = ["dog", "cat", "bird"]

console.log(animals.copyWithin(0, 1))

high preformance method to shift values in an array.

target of where your going to be copying 

1 - 2 go to two. 2 is exclusive so your only looking at car 