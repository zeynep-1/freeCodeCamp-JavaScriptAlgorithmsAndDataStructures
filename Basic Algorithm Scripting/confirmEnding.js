function confirmEnding(str, target) {
    if(str.substring(str.length - target.length) == target){
        return true;
    }
    return false;
}
console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Congratulation", "on")); // true
