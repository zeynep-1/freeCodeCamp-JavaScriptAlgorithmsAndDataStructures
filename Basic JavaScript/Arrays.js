const oneDimensionalArr = ["x", 1];
const twoDimensionalArr = [["x", 1], ["x", 1]];

// entries of arrays are mutable

const arr1 = [1, 2, 3];

// .push()
arr1.push(4)
console.log(arr1); // [ 1, 2, 3, 4 ]

arr1.push([5, 6]);
console.log(arr1); // [ 1, 2, 3, 4, [ 5, 6 ] ]

// .pop()
const popped = arr1.pop();
console.log(popped); // [ 5, 6 ]
console.log(arr1); // [ 1, 2, 3, 4 ]

// .shift()
const removed = arr1.shift();
console.log(removed); // 1
console.log(arr1); // [ 2, 3, 4 ]

//.unshift()
arr1.unshift([-1, 0, 1]);
console.log(arr1); // [ [ -1, 0, 1 ], 2, 3, 4 ]

arr1.unshift("x");
console.log(arr1); // [ 'x', [ -1, 0, 1 ], 2, 3, 4 ]

const arr = [10, 9, 8, 7, 6];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

const nestedArr = [
    [1, 2], [3, 4], [5, 6]
];
for (let i = 0; i < nestedArr.length; i++) {
    for (let j = 0; j < nestedArr[i].length; j++) {
        console.log(nestedArr[i][j]);
    }
}