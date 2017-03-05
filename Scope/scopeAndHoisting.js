
//Examples Steve and I were working on: 
//////////////////////////////////////////
// Functional Hoisting
//////////////////////////////////////////
namedFunction();     // this function is "hoisted" (declared AND defined during the interpretation phase)
anonFunction();  // this function is not hoisted (only declared during the interpretation phase, so it is still undefined during execution)


// this declares AND defines the function during interpretation
function namedFunction() {
    console.log('hoisted');
}


// this declares the function during the interpretation phase
// but it is not defined until the execution phase.
var anonFunction = function () {
    console.log("not hoisted");
}
namedFunction();     // this function is still declared and defined following the initial interpretation.
anonFunction(); // now this function is declared (during interpretation) AND defined (during execution)


//////////////////////////////////////////
// Functional Scope and variable hoisting
//////////////////////////////////////////
var myvar = "global";  
console.log('0', myvar) // declared and defined in global scope 
function f() {
    // the interpretation phase knows there is a local declaration so it doesn't use the global definition, but
    // in the execution phase, this still hasn't been defined. 
    console.log('1', myvar); // declared in functional scope, but not yet defined
    var myvar = "local"; // declared and defined in functional scope
    console.log('2', myvar); // uses functional scope
}
f()
function g() {
    console.log('3', myvar)  // declared and defined in global scope
}
g()

//////////////////////////////////////////
// Closure 
//////////////////////////////////////////


function objMaker(color) {
    // color was passed in and exists in functional scope
    // by returning a function, we keep a reference to the variable color
    // so it cannot be garbage collected and will persist
    return {
        getColor: function () {
            return color;
        },
        setColor: function (c) {
            color = c;
        }
    };
}
var obj = objMaker("blue");
obj.getColor();  // blue
obj.setColor("green");
obj.getColor()  // green



// Asynchronysity and when what runs where.
    var myvar = "global";
    function f() {
       console.log('One',myvar); // (*)
        if (true) {
            var myvar = "local"; // (**)
        }
       console.log('Two',myvar);
    }
    console.log(f())
    console.log('Three',myvar)




//Simple example of scope

var x = "global";
function f() {
    var x = "local";
    console.log(x); // local
}
f();
console.log(x);





var fullname = 'John Doe'; // Global Scope
 var getFullname = function () {
        return this.fullname;
    }

var obj = { // Global Scope
    fullname: 'Colin Ihrig',
    getFullname: function () {
        return this.fullname;
    },
   prop: { // object (obj) Scope
        fullname: 'Aurelio De Rosa',
        getFullname: function () {
            return this.fullname;
        }
    } // ./prop
}; // ./obj

console.log(fullname);
console.log(obj.fullname);
console.log(obj.prop.fullname)
console.log(obj.prop.getFullname());
console.log(obj.getFullname());
console.log(getFullname());
// 'John Doe' // Nope. 
// 'Aurelio De Rosa' // This is the correct answer. prop is an object with two properties, fullname and getFullname. getFullname is a method, or a property that is also a function.
// When obj.prop.getFullname() is called, it is essentially saying prop -> call your method getFullname on YOURSELF. Thus, the above statement returns prop's fullName property
var test = obj.prop.getFullname;
console.log(test());




function f(){
    var y=1;
    //need to return
}

console.log(y) // this will be undefined because it is not in the variable scope.
console.log(f()); // function doesn't return anything.



// DO NOT DO THIS IT WILL LEAK!!!  
// if there is no other variable assigned to y outside of local scope then it will be created but go to global scope and leak


function f(){   
     y=1;
}

console.log(y)

   var myvar = "global";
    function f() {
        print(myvar); // (*)
        if (true) {
            var myvar = "local"; // (**)
        }
        print(myvar);
    }

     f();





    function objMaker(color) {
        return {
            getColor: function() {
                return color;
            },
            setColor: function(c) {
                color = c;
            }
        };
    }
// Interaction:

      var c = objMaker("blue");
     console.log(c.getColor());
  
     c.setColor("green");
     c.getColor()        

 
 //HOISTING EXAMPLE:


// because this is not set to a variable it can access var x=1 at the bottom of the function.
 
//  HOISTING EXAMPLE ONE 
 function getX(){
     return x;
 }

 var x = 1
console.log(x)

y=2


 function getX(){
    return y=1
 }

 var x = 1
console.log(x)
console.log(y)
console.log(getX())




//  HOISTING EXAMPLE TWO 
console.log(getX()) //cannot access here.

var getX = function(){
    return x;
}
var x = 1 //This has to be above console.log or it doesn't work

console.log(getX()) // because it has a variable assigned to it. We can now access this here.




// HOISTING EXAMPLE THREE

var getX = function(){
    return x;
}


 console.log(getX()) //Becomes undefined because x is not defined before we call it.

var x = 1  










var foo = 1;

function bar() {
	if (!foo) {
		var foo = 10;
	}
	console.log('foo', foo);
}
console.log('function', bar());

 
foo:1
function bar ===== foo:10
                    console.log(foo)

console.log


var x = 1;
console.log(x); 

if (true) {
	var x = 2;
	console.log(x); 
}
console.log(x);











  
function test() {
   console.log(a); // undefined because the variable has not been declaired yet.
   console.log(foo()); //because the function is not assigned to a variable this one will run. if it was a variable this would also be undefined.
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test();// undefined 
  		// 2