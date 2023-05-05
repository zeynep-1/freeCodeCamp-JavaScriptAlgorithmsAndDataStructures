// scope refers to the visibility of variables

// Variables which are defined outside of a function block have Global scope

// Variables which are declared without the let or const keywords are automatically created in the global scope.

// Variables which are declared within a function, have local scope.

function myLocalScope() {
  let myVar = 10;
  console.log('inside myLocalScope', myVar);
  // inside myLocalScope 10
}
myLocalScope();
// console.log('outside myLocalScope', myVar);
// ReferenceError: myVar is not defined

const someVar = "Hat";
function myFun() {
  const someVar = "Head";
  return someVar; // Head
}
