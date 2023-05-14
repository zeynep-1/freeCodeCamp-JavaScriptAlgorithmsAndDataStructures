function titleCase(str) {
    let newStr = "";
    for (let i in str.split(" ")) {
        newStr += str.split(" ")[i].substring(0, 1).toUpperCase() + str.split(" ")[i].substring(1,).toLowerCase() + " ";
    }
    return newStr.substring(0, newStr.length - 1);
}
console.log(titleCase("I'm a little tea pot"));
// I'm A Little Tea Pot