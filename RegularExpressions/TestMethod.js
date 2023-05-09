// regex or regexp

// .test() -> true / false

let testStr = "freeCodeCamp";
let testRegex = /Code/;
console.log(testRegex.test(testStr)); // true

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
console.log(petRegex.test(petString)); // true

/*
the i flag - ignore case
*/

let myString = "FREECODECAMP";
let fccRegex = /freeCodeCamp/i;
console.log(fccRegex.test(myString)); // true