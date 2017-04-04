var equation = 'James Ramsey<br><i>M. A. Clin. Psych.  M. Div. Theo.</i><br><a href="./ccn_more_information.php?id=3257">More Info</a>'

// var name2 = name.match(/[a-z ]/gi)
// console.log(name2)

// var eliminate = name.match((/[a-z]*/gi))
// var eliminate = name.replace(/[.*+?^${}()<|>[]\\]/g, '\\$&')
var name = equation.split('')
console.log(name)
for (var i = 0; i < name.length; i++) {
    console.log(name[i])
    if (name[i] === "<") {
        return ""
    }
    if (name[i] === ">") {
        return ""
    }

}
//console.log(eliminate)
console.log(name[i])



var equation = 'James Ramsey<br><i>M. A. Clin. Psych.  M. Div. Theo.</i><br><a href="./ccn_more_information.php?id=3257">More Info</a>'

var name = equation.match("[^<br>]")
// var name2 = name.match(/[a-z ]/gi)
// console.log(name2)







var equation = 'James Ramsey<br><i>M. A. Clin. Psych.  M. Div. Theo.</i><br><a href="./ccn_more_information.php?id=3257">More Info</a>'
var name = equation.replace(/[^a-zA-Z 0-9.]+/g, '');
console.log(name)



var equation = 'James Ramsey<br><i>M. A. Clin. Psych.  M. Div. Theo.</i><br><a href="./ccn_more_information.php?id=3257">More Info</a>'
var name = equation.replace(/ *\<.*\>/g, "");
console.log(name)



var equation = 'James Ramsey<br><i>M. A. Clin. Psych.  M. Div. Theo.</i><br><a href="./ccn_more_information.php?id=3257">More Info</a>'
var name = equation.replace(/(<([^>]+)>)/ig, " ");
console.log(name)

function deleteMI(MoreInfo) {
   var MoreInfo = MoreInfo.split(" ")
   console.log(MoreInfo)
    for (var i = 0; i < MoreInfo.length; i++) {
        if (MoreInfo[i] === "More") {
             MoreInfo[i] = "";
        } else if (MoreInfo[i] === "Info") {
            MoreInfo[i] = "";
        } else {
             MoreInfo[i]
        }
    }
    return MoreInfo[i]
}
    console.log(deleteMI(name))



//HOW TO REPLACE A STRING WITH AN EMPTY STRING.

var string = "hello OUT out there!"
var arr = string.split(' ')
for(var i = 0; i < arr.length; i++){
    if(arr[i] === "OUT"){
        arr[i] = "";
    }
    console.log(arr[i])
}


var string = "hello OUT out there!"
var replaceString = string.replace("OUT","")
console.log(replaceString)



//OR if there is more than one

var str = "hello OUT out OUT there!"

var i = 0, strLength = str.length;
 
for(i; i < strLength; i++) {
 
 str = str.replace("OUT", "");
 
}
 
console.log(str);





    //Remove special characters (like !, >, ?, ., # etc.,) from a string using JavaScript:

    var temp = new String('This is a te!!!!st st>ring... So??? What...');
    console.log(temp + '<br>');
    temp = temp.replace(/[^a-zA-Z 0-9]+/g, '');
    console.log(temp + '<br>');
    //jsFiddle

    //Edit:

    //If you don't want to remove dot(.) from string:

    temp = temp.replace(/[^a-zA-Z 0-9.]+/g, '');


    var stringVariable = 'America/Argentina/Buenos_Aires',
        text = stringVariable.substring(0, stringVariable.indexOf('/'));

    console.log(text)








    // *******************************************
    //REGEX EXAMPLES and Tutorialhttps://regexone.com/
    // *******************************************

    //lesson #1
    // Match 
    var one = 'abcdefg'
    // Match	
    var two = 'abcde'
    // Match	
    var three = 'abc'

    //*  [a-g]
    one.match(abc)
    two.match(abc)
    three.match(abc)





    var equation = 'James Ramsey<br><i>M. A. Clin. Psych.  M. Div. Theo.</i><br><a href="./ccn_more_information.php?id=3257">More Info</a>'

    // var name2 = name.match(/[a-z ]/gi)
    // console.log(name2)

    // var eliminate = name.match((/[a-z]*/gi))
    // var eliminate = name.replace(/[.*+?^${}()<|>[]\\]/g, '\\$&')
    var name = equation.split('')

    for (var i = 0; i < name.length; i++) {
        // console.log(name[i])
        if (name[i] === "<") {
            return " "
        }
        if (name[i] === ">") {
            return " "
        }

    }
    //console.log(eliminate)
    console.log(name[i])
