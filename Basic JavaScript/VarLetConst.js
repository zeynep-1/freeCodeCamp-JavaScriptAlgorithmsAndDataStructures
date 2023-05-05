// var keyword
// you can easily overwrite variable declarations

var city = "Istanbul";
var city = "Ankara";

// *********************************************************

// A keyword let was introduced in ES6

let city2 = "Istanbul";
// let city2 = "Ankara";
// SyntaxError: Identifier 'city2' has already been declared

// *********************************************************

const FAV_PET = "Dogs"; // read-only
// FAV_PET = "Cats";
// TypeError: Assignment to constant variable.