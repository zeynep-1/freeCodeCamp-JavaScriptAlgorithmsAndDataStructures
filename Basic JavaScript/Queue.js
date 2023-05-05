// queue is an abstract Data Structure

function nextInLine(arr, item) {
    arr.push(item);
    let removed = arr.shift();
    return removed;
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr)); // Before: [1,2,3,4,5]
console.log(nextInLine(testArr, 6)); // 1
console.log("After: " + JSON.stringify(testArr)); // After: [2,3,4,5,6]