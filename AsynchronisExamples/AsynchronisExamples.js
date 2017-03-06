


// This is a good example of how JavaScript is Asynchronys.
//EXAMPLE ONE.

var x = 1;
console.log('One', x); 

function y() {
	var x = 2;
	console.log('Two', x); 
}
console.log('Three', x);
console.log('Four', y());



//EXAMPLE TWO.
var x = 1;
console.log('One', x); 

function y() {
	var x = 2;
    return x
	console.log('Two', x); // will be undefined because after a return nothing else processes.
}
console.log('Three', x);
console.log('Four', y());

