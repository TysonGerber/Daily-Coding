
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





var x = "global";
function f() {
    var x = "local";
    console.log(x); // local
}
f();
console.log(x);