/*
ECMAScript, or ES, is a standardized version of JavaScript.

ES5 (ECMAScript 5) was finalized in 2009.

ES6, released in 2015, added many powerful new features to the language.
*/

// with var keyword
var printNumTwo;
for (var i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function () {
            return i;
        };
    }
}
console.log(printNumTwo()); // 3
console.log(i); // 3

// with let keyword
let letPrintNumTwo;
for (let j = 0; j < 3; j++) {
    if (j === 2) {
        letPrintNumTwo = function () {
            return j;
        };
    }
}
console.log(letPrintNumTwo()); // 2
// console.log(j); // ReferenceError: j is not defined

const s = [5, 6, 7];
// s = [1, 2, 3]; // TypeError: Assignment to constant variable.
s[2] = 45;
console.log(s); // [ 5, 6, 45 ]