
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








// Take the array 1,2,3 and times it by 2

var arr = [1,2,3]


function times(num){
r = []
for(var i = 0; i < num.length; i++){
   r.push(num[i] * 2)
}
return r
}
console.log(times(arr))




// *******************************
// HELLO WORLD EXAMPLE: DORLD OLLEH
// *******************************

// Take this string and iterate through it backwards so it says 'dlrow olleh'
string = 'Hello World'

var backwards = string.split('').reverse().join('')

console.log(backwards)


// Take this string and iterate through it backwards so it says 'dlrow olleh'
string = 'Hello World'

var arr = string.split('')
// console.log(arr) [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]

    var backwards = [];
    for(var i=arr.length-1; i >= 0; i--){
        backwards.push(arr[i])
    }

console.log(backwards)




// SECONDS, DAYS, HOURS, DAYS.

//NESTED FOR LOOP EXAMPLE
function dayClock(){
for (var d = 0; d < 31; d++) { // days
  for (var h = 0; h < 24; h++) {
    console.log("hours" + h) // hours
    for (var m = 0; m < 60; m++) {
      console.log("minute" + m)// minutes
      for (var s = 0; s < 60; s++) {
        console.log('seconds' + s)   //seconds
      }
    }
  }
}
}
console.log(dayClock())