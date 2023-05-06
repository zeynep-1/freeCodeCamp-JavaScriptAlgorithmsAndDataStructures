// spread operator ...

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // 89
// Math.max(arr) returns NaN,
// Math.max() expects comma-separated arguments

const maximus2 = Math.max(...arr); // 89

// ...arr returns an unpacked array.
// In other words, it spreads the array.

const arr2 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr3;
arr3 = [...arr2];