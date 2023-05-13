function largestOfFour(arr) {

    let newArr = [];
    let largest = -1000;

    for (let i in arr) {
        for (let j in arr[i]) {
            if (arr[i][j] > largest) {
                largest = arr[i][j];
            }
        }
        newArr.push(largest);
        largest = -1000;
    }
    return newArr;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // [ 5, 27, 39, 1001 ]
