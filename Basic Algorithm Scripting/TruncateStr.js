function truncateString(str, num) {
    if (num < str.length) {
        return str.substring(0, num) + "...";
    }
    return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)) // A-tisket...