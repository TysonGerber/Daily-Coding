
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