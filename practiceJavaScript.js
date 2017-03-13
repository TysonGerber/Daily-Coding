

function repeatify(string, number){
    for(var i = 0; i < number; i++){
        string += string
}
return string;
}

console.log(repeatify("hello", 3));









var fullname = 'John Doe'; // Global Scope
var obj = { // Global Scope
   fullname: 'Colin Ihrig',
   prop: { // object (obj) Scope
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   } // ./prop
}; // ./obj

console.log(obj.prop.getFullname());
// 'John Doe' // Nope. 
// 'Aurelio De Rosa' // This is the correct answer. prop is an object with two properties, fullname and getFullname. getFullname is a method, or a property that is also a function.
// When obj.prop.getFullname() is called, it is essentially saying prop -> call your method getFullname on YOURSELF. Thus, the above statement returns prop's fullName property
var test = obj.prop.getFullname;
console.log(test())








var arr = [1,2,3]

arr.forEach(function(element) {
  element = element * 2
  console.log(element)
});




  function foo(){
   var bar = "hello"
	function fooValue(){
    	return bar
    }
  return fooValue;
  }
  var foo1 = foo()
  var foo2 = foo()



function repeatify(name, num){
    for(var i = 0; i < num; i++){
      
    }
    return i
}

  console.log(repeatify("hello", 3));



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
