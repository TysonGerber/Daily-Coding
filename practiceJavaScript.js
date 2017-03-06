

function repeatify(string, number){
    for(var i = 0; i < number; i++){
        string += string
}
return string;
}

console.log(repeatify("hello", 3));









var fullname = 'John Doe'; // Global Scope
var obj = { // Global Scope
   fullname: 'Colin Ihrig',
   prop: { // object (obj) Scope
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   } // ./prop
}; // ./obj

console.log(obj.prop.getFullname());
// 'John Doe' // Nope. 
// 'Aurelio De Rosa' // This is the correct answer. prop is an object with two properties, fullname and getFullname. getFullname is a method, or a property that is also a function.
// When obj.prop.getFullname() is called, it is essentially saying prop -> call your method getFullname on YOURSELF. Thus, the above statement returns prop's fullName property
var test = obj.prop.getFullname;
console.log(test())








var arr = [1,2,3]

arr.forEach(function(element) {
  element = element * 2
  console.log(element)
});




  function foo(){
   var bar = "hello"
	function fooValue(){
    	return bar
    }
  return fooValue;
  }
  var foo1 = foo()
  var foo2 = foo()



function repeatify(name, num){
    for(var i = 0; i < num; i++){
      
    }
    return i
}

  console.log(repeatify("hello", 3));
