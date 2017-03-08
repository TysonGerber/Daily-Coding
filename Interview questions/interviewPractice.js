
//http://www.logicguns.com/q/what-is-a-potential-pitfall-with-using-typeof-bar-objectto-determine-if-baris-an-object-how-can-this-pitfall-be-avoided/5625c8222b78726726a8e10a/
  
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };

}
  
console.log(foo1());
  console.log(typeof bar == 'object') && console.log(bar != null);
console.log(foo2());
  console.log(typeof bar == 'object') && console.log(bar != null);




var name = null;
var name2 = undefined;

console.log(typeof name == "object") // {bar: "hello"}
console.log(typeof name2 == "object") // undefined




// Scope and how it works.
  
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
// 'Aurelio De Rosa' // This is the correct answer. prop is an object with two properties, fullname and getFullname. getFullname is a method, or a property that is also a function.
// When obj.prop.getFullname() is called, it is essentially saying prop -> call your method getFullname on YOURSELF. Thus, the above statement returns prop's fullName property
var test = obj.prop.getFullname; // This one is tricky. First, this line is essentially aliasing prop's getFullname method to make use of it in the global space. When Test() is called in the global namespace, it will be called on the first global variable it can find with the name 'fullname'
// In this case, that global variable is 'John Doe', which is the answer. If fullname were called anything else, say 'var pecker = ...', you would then see undefined like you suggested.


console.log(test()); //testes one two Undefined is the write answer! :) 
  //1st guess was this but I think it is wrong:'Undefined' 

//No sir: The code prints Aurelio De Rosa and John Doe. The reason is that the context of a function, what is referred with the this keyword, in JavaScript depends on how a function is invoked, not how it’s defined.

// In the first console.log() call, getFullname() is invoked as a function of the obj.prop object. So, the context refers to the latter and the function returns the fullname property of this object. On the contrary, 
// when getFullname() is assigned to the test variable, the context refers to the global object (window). This happens because test is implicitly set as a property of the global object. For this reason, the function 
// returns the value of a property called fullname of window, which in this case is the one the code set in the first line of the snippet.
// Have you actually written this script and tried it?

  
// what is the result of the three console log statements

// What I understand is that the child can see outside to the parent. However the parent cannot see into the child. Example. 
// Well, let me see that example! :P 
// Correct.

 write me a JavaScript that takes the array var arr = [1,2,3,4,5,6,7,8,9,10] and returns a new array that’s a copy of arr, but reversed. Do it. And no shortcut methods! 😛

var numbers = [1,2,3,4,5,6,7,8,9,10]


var newArr = numbers.reverse().slice()
console.log(newArr)


var numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers.reverse())

