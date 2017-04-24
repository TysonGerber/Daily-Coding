


function findLength(string) {
    if (!string) {
        return 0;
    }

    var checkUPperCase = string.toUpperCase();
    var checkSplit = checkUPperCase.split(" ");



    const word = checkSplit[checkSplit.length - 1];
    return wordLength = word.length
}

const blah = findLength("Hello World");
const blah2 = findLength("");
const blah3 = findLength(null);



// take a string
var string = "This is a string."

var arr = string.split("").reverse().join("")
console.log(arr)

var string = "This is a string."

function strt(s){
    var word = s.split("")
    console.log(word)
    let reversedSTring = [];
    for(var i = word.length-1; i >= 0; i--){
        let character = word[i]
      reversedSTring.push(character);
    }

    return reversedSTring.join("");
}

console.log(strt("This is a reversed string"));

// check to see if a word is an anagram


function checkForAnagram(str){
for(var i = 0; i < str.length; i++){
    if(str[i] != str[i].length-1){
        return false;
    } else {
    return true;
}
}

console.log(checkForAnagram('racecar'));
console.log(checkForAnagram('racekar'));