function helloWorld() {
    console.log("Hello World");
}
helloWorld(); // Hello World

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(3)); // 15

function isEqual(a, b) {
    return a === b;
}

// If function doesn't have a return statement, the returned value is undefined.

function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5)); // [1, 2, 3, 4, 5]

function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}

function rangeOfNumbers(startNum, endNum) {

    if (startNum > endNum) {
        return [];
    } else {
        const countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        return countArray;
    }
};