
// Going through some loop and Javascript problems.


for(var i = 0; i < 5; i++){
    console.log(i)
}

for(var i = 0; i < 501; i+=100){
    console.log(i)
}

for(var i = 1; i < 65; i*=2){
    console.log(i)
}

for(var i = 1; i < 4; i++){
      console.log(i)
        console.log(i)
          console.log(i)
    // console.log([i] + [i] + [i])
}

for(var i = 0; i < 6; i++){
    console.log(i * 2)
}

for(var i = 3; i < 16; i+=3){
    console.log(i)
}

for(var i = 9; i > 0; i--){
    console.log(i)
}

for(var i = 0; i < 10; i++){
    console.log(i)
}


var count = function(){
    var array = [];
    for(var i = 0; i < 3; i++){
       
        for(var i2 = 0; i2 < 4; i2++){
             array.push(i2)
        
        }
        
    }
    return array;

}  

console.log(count())




// Take this string and iterate through it backwards so it says 'dlrow olleh'
string = 'Hello World'

var arr = string.split('')
// console.log(arr) [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]
for(var i = arr.length-1; i < arr.length; i--){
    console.log(arr[i])
}


string.forEach(function(element){
    console.log(element[])
})