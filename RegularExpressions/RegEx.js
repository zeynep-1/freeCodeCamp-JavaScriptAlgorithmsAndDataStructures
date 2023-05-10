// wildcard character
// to match hug, huh, hut, hum -> use the regex /hu./

// to match bag, big, bug -> use the regex /b[aiu]g/
console.log("bog".match(/b[aiu]g/)); // null

console.log("mat".match(/[a-e]at/)); // null

console.log("Jenny8675309".match(/[a-z0-9]/ig));
/*
[
  'J', 'e', 'n', 'n',
  'y', '8', '6', '7',
  '5', '3', '0', '9'
]
*/

// You could also create a set of characters that you do not want to match.
// These types of character sets are called negated character sets.
// To create a negated character set, you place a caret character (^)

// /[^aeiou]/gi matches all characters that are not a vowel
// Note that  ., !, [, @, / and white space are matched

// + -> One or More Times in a row
console.log("abc".match(/a+/g)); // [ 'a' ]
console.log("aaabc".match(/a+/g)); // [ 'aaa' ]

// * -> Zero or More Times in a row
console.log("gooooal".match(/go*/));
// [ 'goooo', index: 0, input: 'gooooal', groups: undefined ]
console.log("ga".match(/go*/));
// [ 'g', index: 0, input: 'ga', groups: undefined ]

// greedy match | lazy match
console.log("titanic".match(/t[a-z]*i/)); // titani
// use the ? character to change it to lazy matching
console.log("titanic".match(/t[a-z]*?i/)); // ti

// ^ beginning
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/; // beginning
firstRegex.test(firstString); // true

// $ ending
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); // true

// \w -> [A-Za-z0-9_]

// \W -> [^A-Za-z0-9_]

// \d -> [0-9]

// \D -> [^0-9]

// \s -> whitespace
// [ \r\t\f\n\v] carriage return, tab, form feed, new line characters

// \S -> non-whitespace
// [^ \r\t\f\n\v]

console.log(/a{3,5}h/.test("aah")); // false
console.log(/a{3,5}h/.test("aaaah")); // true

console.log(/oh{3,6}\sno/gi.test("Ohhh no")); // true

// /ha{3,}h/
// /ha{3}h/

// ? zero or one
console.log(/colou?r/.test("color")); // true
console.log(/colou?r/.test("colour")); // true

// positive lookahead and negative lookahead
// (?=...) and (?!...)
console.log("qu".match(/q(?=u)/)); // ["q"]
console.log("qt".match(/q(?!u)/)); // ["q"]

// /P(engu|umpk)in -> Penguin or Pumpkin

let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // true
repeatStr.match(repeatRegex); // ["row row row", "row"]

// to match a string that consists of only the same number repeated exactly three times separated by single spaces.
let reRegex = /(^\d+) \1 \1$/;

// .replace()
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); // Camp Code

let hello = "   Hello, World!  ";
let wsRegex = /^\s*|\s*$/g;
hello.replace(wsRegex,''); // Hello, World!
