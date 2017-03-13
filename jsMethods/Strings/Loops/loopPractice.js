
// Going through some loop and Javascript problems.


for (var i = 0; i < 5; i++) {
  console.log(i)
}

for (var i = 0; i < 501; i += 100) {
  console.log(i)
}

for (var i = 1; i < 65; i *= 2) {
  console.log(i)
}

for (var i = 1; i < 4; i++) {
  console.log(i)
  console.log(i)
  console.log(i)
  // console.log([i] + [i] + [i])
}

for (var i = 0; i < 6; i++) {
  console.log(i * 2)
}

for (var i = 3; i < 16; i += 3) {
  console.log(i)
}

for (var i = 9; i > 0; i--) {
  console.log(i)
}

for (var i = 0; i < 10; i++) {
  console.log(i)
}


var count = function () {
  var array = [];
  for (var i = 0; i < 3; i++) {

    for (var i2 = 0; i2 < 4; i2++) {
      array.push(i2)

    }

  }
  return array;

}

console.log(count())








// Take the array 1,2,3 and times it by 2

var arr = [1, 2, 3]


function times(num) {
  r = []
  for (var i = 0; i < num.length; i++) {
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
for (var i = arr.length - 1; i >= 0; i--) {
  backwards.push(arr[i])
}

console.log(backwards)




// SECONDS, DAYS, HOURS, DAYS.

//NESTED FOR LOOP EXAMPLE
function dayClock() {
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

function findTime(time) {
  for (var s = 0; s < 60; s++) {
    console.log(s)
    for (var mil = 0; mil < 1000; mil++) {
      console.log(mil)
    }
  }
}
findTime(1000)



function X(s) {
  for (var i = 0; i < s.length; i++) {
    console.log(s[i] + "seconds:")
  }
}
X(25);

var numbers = [1, 2, 3, 4, 5, 6]

function a(b) {
  for (var i = 0; i < b; i++) {
    console.log(i)
  }

}
a(25)



var num = [1, 2, 3, 4, 5, 6]

function count(numbers) {
  countArray = [];
  for (var i = 0; i < numbers.length; i++) {
    countArray.push(numbers[i])
  }
  return countArray
}

console.log(count(num));



var numbers = [1, 2, 3, 4, 5]

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}


var numbers = [1, 2, 3, 4, 5]

function timesTwo(nums) {
  var newArr = [];
  for (var i = 0; i < nums.length; i++) {
    newArr.push(nums[i])
  }
  return newArr
}
console.log(timesTwo(numbers))

var numbers = [1, 1000, 3000, 5000]

numbers.map(function (el) {
  console.log(el % 1000 === 0)
})

var numbers = [1, 1000, 3000, 5500]

numbers.map(function (el) {
  if (el % 1000 === 0) {
    console.log(el / 1000 + " minute")
  }
})

var numbers = [1, 1000, 3000, 5000, 60000, 65000]

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 60000 === 0) {
    console.log(numbers[i] / 60000 + " minute.")
  } else if (numbers[i] % 1000 === 0) {
    console.log(numbers[i] / 1000 + " second.")
  }
}








var numbers = [1, 1000, 3000, 5500]

numbers.map(function (el) {
  if (el % 1000 === 0) {
    console.log(el / 1000)
  } else {
    console.log(el)
  }
})

num % 1 != 0
// 23.5 % 1 = 0.5

function twins(letters) {

  for (var i = 0; i < letters.length-1; i += 2) {
    if (letters[i] != letters[i + 1] || letters.length % 2 == 1) {
      return false
    }
    
  }
  return true
}

console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']))
console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']))
console.log(twins(['a', 'a', 'b', 'z']))
console.log(twins(['a', 'a', undefined]))
console.log(twins(['a', 'a', undefined, undefined]))


var numbers = [1,2,3,4,5,6,7,8,9,10]

for(var i = numbers.length; i >=0; i--){
  console.log(i)
}








function SecondsToTime(seconds){
 var minutes = (seconds / 60)  // convert seconds into minutes
 var mLeftOver = ((minutes % 1).toFixed(2)) // left over time
 var convertLeftOverMinutes = mLeftOver * 60 // convert left over minutes into minutes
var totalMinutes = Math.round(minutes + convertLeftOverMinutes) // adding minute and left over minutes.



 return   Math.floor(minutes) + " minutes " + convertLeftOverMinutes + " left over" + totalMinutes
}
console.log(SecondsToTime(7600));



function SecondsToTime(seconds){
    // var days = Math.floor(seconds / 24*60*60)
    var days = 0
    var hours = ((seconds-(days*60*60*24))/60*60) 
    var minutes = ((seconds-(hours*60*60))/60) 

 return  days + " days " + hours + " hours and " 
}
console.log(SecondsToTime(3600));


 Math.round( number * 10 ) / 10;

 function SecondsToTime(seconds){
  var minutes = (seconds / 60)
  var hours = (minutes / 60)
  var days = (hours / 24) 
  // if (hours == 24){
  //   console.log(1)
  // }
  var week = (days / 7)
 
 return  days + " days " + hours + " hours and " + minutes + " minutes."
}
console.log(SecondsToTime(86400));

function secondsToTime(seconds){

for(var s = 0; s < seconds; s++){
console.log(s)
}
return s + " seconds."
}
console.log(secondsToTime(60));


function dayClock(seconds) {
  for (var d = 0; d < 31; d++) { // days
    for (var h = 0; h < 24; h++) {
      //console.log("hours" + h) // hours
      for (var m = 0; m < 60; m++) {
        //console.log("minute" + m)// minutes
        for (var s = 0; s < seconds; s++) {
          //console.log('seconds' + s)   //seconds
        }
      }
    }
  }return d + "days" + h + "hours" + s + "seconds" + m + "minutes"
}
console.log(dayClock(60))



function tellTime(seconds){
  minutes = (seconds / 60)
  hours = (minutes / 60)
return hours + "hours" + minutes + "minutes"
}

console.log(tellTime(3660))



function SecondsToTime(seconds){
    // var days = Math.floor(seconds / 24*60*60)
    var days = 0
    var hours = ((seconds - (days/60/60/24))) 
    var minutes = ((seconds-(hours*60*60))/60) 

 return  days + " days " + hours + " hours and " + minutes + "minutes" 
}
console.log(SecondsToTime(3600));




