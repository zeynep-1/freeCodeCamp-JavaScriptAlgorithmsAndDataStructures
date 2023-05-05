// .length
console.log("Zeynep".length) // 6

console.log("Zeynep"[0]) // Z

// String values are immutable

let myStr = "Hi";
myStr[0] = "X"; // error

myStr = "Xi";
console.log(myStr) // Xi

// last letter
let firstName = "Zeynep";
let lastLetter = firstName[firstName.length - 1]; // first-to-last letter
console.log(lastLetter); // p