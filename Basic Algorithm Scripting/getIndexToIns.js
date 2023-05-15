function getIndexToIns(arr, num) {

    arr.sort(function (a, b) { return a - b });
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            index = i;
            break;
        }
        else {
            index = arr.length;
        }
    }
    return index;
}

// getIndexToIns([10, 20, 30, 40, 50], 35) -> 3