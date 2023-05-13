function findLongestWordLength(str) {

    let arr = str.split(" ");

    let length = 0;
    let index = 0;

    for (let i in arr) {

        if (arr[i].length > length) {
            length = arr[i].length;
            index = i;
        }
    }

    return arr[index];
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // jumped
