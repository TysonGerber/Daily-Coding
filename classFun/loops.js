

// loop
numbers = [1,2,3,4]

 for(var i = 0; i < numbers.length; i++){
   console.log(numbers[i] * 2)
 }

numbers = [1,2,3,4]

 for(var i = 0; i <= 4; i*=2){
   console.log(i)
 }






//function with loop 

function timesTwo(numbers){
newArr = [];
  for(var i = 0; i <numbers.length; i++){
    newArr.push(numbers[i] * 2)
  }
     return newArr
}
console.log(timesTwo([1,2,3,4]))






// map function
numbers = [1,2,3,4]

var timesTwo = numbers.map(function(el){
  return el * 2
})

console.log(timesTwo)






numbers = [1,2,3,4,5,]

var string = numbers.map(function(el){
  return el  
}).reverse().join(',')

console.log(string)







// reverse numbers
numbers = [1,2,3,4,5,]

var string = numbers.reverse().join(',')

console.log(string)






// reverse numbers with .map

numbers = [1,2,3,4,5,]

var string = numbers.map(function(el){
 return el
})

console.log(string)



















  animals = ['tigers', 'lions', 'bears']

  animals.forEach(function (element) {
    element = element + ' I am scared'
    console.log(element)
  })








  animals = ['tigers', 'lions', 'bears']

  var newAnimals = animals.forEach(function (element) {
    console.log(element + ' I am scared')
  })


console.log(newAnimals)





var toUpper = ["Hi", "my", "name", "is", "Tyson"]

var newer = toUpper.forEach(function(element){
 var upper = newer.toUpperCase()
 
})

function x(a,b){
var count = [];
var c = a + b
c.push(count)
return count
}

console.log(x(3,4))


var numbers = [1,2,3,4,5,6,7,8,9,10]

var reverse = numbers.reverse()
console.log(numbers)


var numbers = [1,2,3,4,5,6,7,8,9,10]

var numRev = [];

function Hello(num){
    for(var i = num.length-1; i >= 0; i--){
      numRev.push(num[i])
  }
   
    return numRev
}
console.log(Hello(numbers))
