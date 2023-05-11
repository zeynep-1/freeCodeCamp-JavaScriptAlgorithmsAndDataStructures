let array = ['today', 'was', 'not', 'so', 'great'];
let spliced = array.splice(2, 2);
console.log(spliced); // [ 'not', 'so' ]
console.log(array); // ['today', 'was', 'great']

[10, 11, 12, 12, 15].splice(3, 1, 13, 14);
// [ 10, 11, 12, 13, 14, 15 ]

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
console.log(todaysWeather); // [ 'snow', 'sleet' ]
console.log(weatherConditions); // [ 'rain', 'snow', 'sleet', 'hail', 'clear' ]

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}

let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2); // [ 1, 2, 3, 4 ]

console.log(arr1.indexOf(1)); // 0
console.log(arr1.indexOf(-2)); // -1  -> doesn't exist
