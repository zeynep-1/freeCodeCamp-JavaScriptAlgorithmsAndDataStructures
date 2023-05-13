function factorialize(num) {
    let result;
    if (num >= 2) {
        result = num * factorialize(num - 1)
    } else if (num == 1 || num == 0) {
        result = 1;
    }
    return result;
}
console.log(factorialize(5)); // 120