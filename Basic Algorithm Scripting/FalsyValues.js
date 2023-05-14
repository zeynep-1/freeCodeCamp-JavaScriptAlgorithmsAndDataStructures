function bouncer(arr) {
    let newArr = [];
    for (let i in arr) {
        if (Boolean(arr[i]) != false) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(bouncer([7, "ate", "", false, 9])); // [ 7, 'ate', 9 ]