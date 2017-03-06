  
  //JSON Object
  "person": { // result from a patch request
 	"name": "Tyson",
    "age": 34,
    "married": true
}

//JSONparse() We use if we get data back from an api that is a JSON Object, and we need it to becom Javascript Object. we use JSONparse() converts from above example to the example below.

  // Javascript Object
  var person = {
  	name: "Tyson",
    age: 32,
    married: true
  }
  
  
 // JSON Object like the first one above
  JSON.parse(person) // Javascript Object like the second one above

  
