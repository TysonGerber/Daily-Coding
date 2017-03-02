//
                             <=== ARRAY METHODS ===>


// ***************************************************************************************
// 								TYSON GERBER
// ***************************************************************************************

       1. arr.toString()
 

            function Car(brand, name, color, fuel, speed, year ) {
              this.name = name;
              this.brand = brand;
              this.color = color;
              this.fuel = fuel;
              this.speed = speed;
              this.year = year;
            }

            fordFocus = new Car("Ford", "Focus", "Blue", "Regular Unleaded", "80 mph", 2002);

            Car.prototype.toString = function carToString(){
              return " This is a " + this.color + " " + this.brand + " " + this.name + ". " + " It's reveal date was " + this.year + ", " + " it's max speed is " + this.speed + " and takes " + this.fuel + " fuel."
            }
            //console.log(fordFocus.toString()) //This is a Blue Ford Focus.  It's reveal date was 2002,  it's max speed is 80 mph and takes Regular Unleaded fuel.
            console.log(fordFocus+" ") // same

            // fordFocus is an object and you want to use it as an object, but if you want to print out the STRING (toString() output) rather than the OBJECT ({name:…, brand:…}) you need to use it as a string.  By adding a string to the object, it implicitly converts the object into the string using toString().
            //console.log(fordFocus) // outputs the object.
            // console.log(fordFocus + “ “) outputs the string (and calls toString() to do that)
            
       2. arr.join() //The join() method joins all elements of an array (or an array-like object) into a string.
        	var combine = ["H", "e", "l", "l", "o", " ", "A", "l", "e", "x", " ", "a", "n", "d", " ", "C", "h", "a", "r", "l", "i", "e"]
           console.log(combine.join("")); //Hello Alex and Charlie
            
          var numbers = [1,2,3,4,5]
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