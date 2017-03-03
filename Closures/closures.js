// *******************************************************************************************
//                                         CLOSURES:
// *******************************************************************************************
// Closures:  A closure is a function with its own private store of variables, that no other function knows about or can access.
// You can create any number of closures. even with the same variable name contained within each one of them.That's because the variables are hidden from all other functions.


// References:  https://teamtreehouse.com/library/the-problem-with-globals
//              http://speakingjs.com/es5/ch16.html#inadvertently_sharing_environments
//              http://javascriptissexy.com/understand-javascript-closures-with-ease/
//              https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
//              https://www.youtube.com/watch?v=yiEeiMN2Khs
//              https://www.youtube.com/watch?v=CQqwU2Ixu-U


//    This is why we have closures. Below is not a closure but shows the need of why we need them!

var count = 0;

function countBirds() {
    count += 1;
    return count + ' birds';
}

function countDogs() {
    count += 1;
    return count + ' dogs';
}

//   in console type 
//   >countBirds()
//   >countBirds()
//   >countBirds()
//   the count dogs
//   >countDogs()
//   >countDogs()
//   >countDogs()
//   >countDogs()


// so we would have to create seperate variables for each for this to work properly
var dogCount = 0;
var birdCount = 0;



//What if we had 1,000 different things we wanted to count? Can you imagine how long it would take to write out a variable for each of these? Closures are what solve these problems! 

var birds = 3;

function dogHouse() {
    var dogs = 8;
    console.log(birds); // 3
    console.log(dogs); //8
}

console.log(birds); //3
console.log(dogs); // undefined

function outer() {
    var countDogs = 0
    function inner() {
        count++;
    }
    return outer
}



// Starting of a closure example:


function dogHouse() { //Outer function
    var dogs = 8;
    function showDogs() { //Inner function. All variables in the outer funcation are visible to to the inner function. Even thouhg they are hidden from the global scope. Just like the outer func has access to the global variables. The inner function has access to the outer functions scope.
        console.log(dogs)
        return showDogs; //f the inner function is returned 
    }
}

var getDogs = dogHouse(); //and assigned to a varialbe
getDogs(); // the private scope of the outer function lives on and remains in the programs memory. So this means we can call the retunred inner function and get access or even modify any private variables.




// EXAMPLE OF CLOSURE
function outerFunction() {
    var someCount = 0;
    function innerFunction() {
        someCount++;
        console.log("Called " + someCount + "times");
    }
    return innerFunction;
}

counter1 = outerFunction();
counter2 = outerFunction();
counter1(); // Called 1 times
counter2(); // Called 1 times



// REAL WORLD EXAMPLE THAT WE CAME UP WITH.
function usersLocation(ipAddressLocation) {
    var user = 0;
    function userCount() {
        user++;
        console.log("So far we have " + user + " from "  + ipAddressLocation + ".")
    }
    return userCount
}

sanFranciscoUsers = usersLocation("San Francisco")
DenverUsers = usersLocation("Denver")

sanFranciscoUsers();
sanFranciscoUsers();
DenverUsers();