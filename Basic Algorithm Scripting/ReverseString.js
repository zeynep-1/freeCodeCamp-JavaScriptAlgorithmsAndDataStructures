function reverseString(str) {
    let arr = [];
    for (let i in str) {
        arr.unshift(str[i]);
    }
    let reversedStr = "";
    for (let i in arr) {
        reversedStr += arr[i];
    }
    return reversedStr;
}
reverseString("hello"); // olleh