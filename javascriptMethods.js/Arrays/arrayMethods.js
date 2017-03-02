//
<=== ARRAY METHODS ===>
arr.toString()
//changes the elements in the array to a string (leaves the commas)

function Car(brand, name, color, fuel, speed, year ) {
  this.name = name;
  this.brand = brand;
  this.color = color;
  this.fuel = fuel;
  this.speed = speed;
  this.year = year;
}

fordFocus = new Car("Ford", "Focus", "Blue", "Regular Unleaded", "80 mph", "2002");

Car.prototype.toString = function carToString(){
  return " This is a " + this.color + " " + this.brand + " " + this.name + ". " + " It's reveal date was " + this.year + ", " + " it's max speed is " + this.speed + " and takes " + this.fuel + " fuel."
}
console.log(fordFocus.toString()) //This is a Blue Ford Focus.  It's reveal date was 2002,  it's max speed is 80 mph and takes Regular Unleaded fuel.
console.log(fordFocus+" ") // same


arr.join()
//easily converts an array to a clean string
    var combine = ["H", "e", "l", "l", "o", " ", "A", "l", "e", "x", " ", "a", "n", "d", " ", "C", "h", "a", "r", "l", "i", "e"]
        console.log(combine.join(""))

    var numbers = [1,2,3,4,5]
    console.log(numbers.join(" + "));

arr.pop()
//removes from the end of the array
    var names = ["Alex", "Charlie", "Tyson", "Richard"]
    console.log(names.pop());

arr.push()
//adds to the end of the array
    var names = ["Alex", "Charlie", "Tyson", "Richard"]
   console.log(names.push("Rob"))
   console.log(names)

arr.shift()
//removes form the beggining of the array
    	var dev = ["I", "am", "a", "FullStack", "Developer"]
   		   console.log(dev.shift()) // I
           console.log(dev) // [ 'am', 'a', 'FullStack', 'Developer' ]
           console.log(dev.shift()) // am
           console.log(dev) // [ 'a', 'FullStack', 'Developer' ]
           console.log(dev.shift()) // a
           console.log(dev) // [ 'FullStack', 'Developer' ]
         
           
arr.unshift()
//adds to the beggining of the array

  console.log(dev.unshift("are")) // 3
           console.log(dev) // [ 'are', 'FullStack', 'Developer' ]
           console.log(dev.unshift("We")) // 4
           console.log(dev) // [ 'We', 'are', 'FullStack', 'Developer' ]
           

arr.length
//returns the number of items in the array

var combine = ["H", "e", "l", "l", "o", " ", "A", "l", "e", "x", " ", "a", "n", "d", " ", "C", "h", "a", "r", "l", "i", "e"]
console.log(combine.length)           


delete arr[0]
//will delete the item at the specified index of the array

arr.splice(2,0,'red','green')
//will insert the corresponding strings into the given indecies of the array

arr.splice(2,0)
//removes the items in the given indecies of the array

arr1.concat(arr2)
//will concatenate  arrays

newArr = oldArr.slice(3)
//create a new array based on slice point of the old array

map()

forEach()

