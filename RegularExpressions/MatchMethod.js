console.log("Hello, World!".match(/Hello/));
// [ 'Hello', index: 0, input: 'Hello, World!', groups: undefined ]

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));
/*
[
  'expressions',
  index: 8,
  input: 'Regular expressions',
  groups: undefined
]
*/

'string'.match(/regex/);
/regex/.test('string');

// global search flag /g

let testStr = "Repeat, Repeat, Repeat";
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// ["Repeat", "Repeat", "Repeat"]

// multiple flags /gi