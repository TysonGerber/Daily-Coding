var name = "Tyson Gerber<>hello"

// var name2 = name.match(/[a-z ]/gi)
// console.log(name2)

var eliminate = name.match((/[^%]*/i)[0])
console.log(eliminate)


var stringVariable = 'America/Argentina/Buenos_Aires',
    text = stringVariable.substring(0, stringVariable.indexOf('/'));

    console.log(text)