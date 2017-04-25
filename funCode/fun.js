// SendGrid submit a writting sample. (with no description. So I sent this. :) 

function findIntern(name) {
    return "Send Grid would enjoy working with the Developer Intern " + name + "!"
}

console.log(findIntern("Tyson Gerber"));




// Example1:

// x = 123,

// return 321
// Example2:

// x = -123,

// return -321

// Return 0 if the result overflows and does not fit in a 32 bit signed integer.
let x = 123

function backwards(x) {
    var rev = x.toString().split("")
    var backwards = [];
    console.log(rev)
    for (var i = rev.length-1; i >= 0 ; i--) {
     backwards.push(rev[i])
     
    }
    return backwards
}

console.log(backwards(x))