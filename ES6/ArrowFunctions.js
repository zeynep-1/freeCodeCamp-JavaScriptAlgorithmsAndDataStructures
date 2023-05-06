// to Write Concise Anonymous Functions

// In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function.

// Instead, we create inline functions.

const myFunc = function () {
    const myVar = "value";
    return myVar;
}

const myArrowFunc = () => {
    const myVar = "value";
    return myVar;
}

const myShorterArrowFunc = () => "value";

const magic = () => new Date();

const doubler = item => item * 2;

const multiplier = (item, multi) => item * multi;

const myConcat = (arr1, arr2) => arr1.concat(arr2);

// default parameters
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting()); // Hello Anonymous