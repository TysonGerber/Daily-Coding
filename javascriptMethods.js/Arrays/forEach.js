

var ages = [32, 33, 16, 40]

// var string = ages.join(',')
// var split = string.split(',')
// console.log(split)

var times2 = ages.forEach(function(element){
     console.log(element * 2)
})



var arr = [1,2,3]


function times(num){
r = []
for(var i = 0; i < num.length; i++){
   r.push(num[i] * 2)
}
return r
}
console.log(times(arr))


console.log([1,2,3].reduce(function(a,b){return a*b;}));

var arr = [1,2,3]

arr.forEach(function(element) {
  element = element * 2
 console.log(element)
});