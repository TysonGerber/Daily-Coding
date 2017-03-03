// http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
// http://speakingjs.com/es5/ch16.html#inadvertently_sharing_environments
// http://www.2ality.com/2011/02/javascript-variable-scoping-and-its.html

  
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


console.log(test());