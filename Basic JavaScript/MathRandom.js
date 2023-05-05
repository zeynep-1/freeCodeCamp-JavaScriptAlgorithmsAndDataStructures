randomNum = Math.random();
// a decimal number between 0 (inclusive) and 1 (exclusive)

console.log(randomNum);

console.log(Math.floor(Math.random() * 20)); // from 0 to 19

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomRange(0, 10));
console.log(randomRange(0, 100));
console.log(randomRange(0, 1000));