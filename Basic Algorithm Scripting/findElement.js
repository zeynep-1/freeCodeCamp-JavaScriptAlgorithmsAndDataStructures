function findElement(arr, func) {
    for (let num in arr) {
        if (func(arr[num])) {
            return arr[num];
        }
    }
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)) // 2