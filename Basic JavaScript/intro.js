// JS is used to make interactive web pages

// in-line comment

/*
multi-line
comment
*/

/*
JavaScript provides eight different data types:
undefined, null, boolean, string, symbol, bigint, number, object
*/

var one = 1;

// Variable names can be made up of numbers, letters, and $ or _

var myFirstName = "Zeynep";
var myLastName = "Akkaya";

var a; // undefined
a = a + 1; // NaN (Not a Number)

// camelCase

let i = 0;

i++; // i = i + 1;
i--; // i = i - 1;

// Decimal numbers, floating point numbers or floats

// 5 % 2 = 1 (remainder)

// backslash (\)
const sampleStr = "I am a \"double quoted\" string inside \"double quotes\".";

const doubleQuoteStr = "This is a string";
const singleQuoteStr = 'This is also a string';

/*
Escape Sequences
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed
*/

let concatenatedStr = "I come first. " + "I come second.";

concatenatedStr = "I come first. ";
concatenatedStr += "I come second.";

// In order for JavaScript to compare two different data types, it must convert one type to another.
// This is known as Type Coercion.

// 1 == '1' // true
// 1 === '1' // false

// 1 is a Number type and '1' is a String type.
console.log(typeof 1); // number
console.log(typeof '1'); // string

let num = 10;
if (num > 5 && num < 10) {
    return "Yes";
}
if (num > 10 || num < 5) {
    return "No";
}

let fruit;
switch (fruit) {
    case "apple":
        console.log("The fruit is an apple");
        break;
    case "orange":
        console.log("The fruit is an orange");
        break;
    case 1:
    case 2:
    case 3:
        result = "1, 2, or 3";
        break;
    default:
        console.log("");
        break;
}

function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
}

function checkSign(num) {
    return (num > 0) ? "positive"
        : (num < 0) ? "negative"
            : "zero";
}
