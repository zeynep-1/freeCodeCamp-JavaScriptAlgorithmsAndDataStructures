const a = parseInt("007"); // 7

const b = parseInt("a11"); // NaN

function convertToInteger(str) {
    return parseInt(str);
}

// The radix can be an integer between 2 and 36

const c = parseInt("11", 2); // 3

function convertToInteger(str) {
    return parseInt(str, 2)
}