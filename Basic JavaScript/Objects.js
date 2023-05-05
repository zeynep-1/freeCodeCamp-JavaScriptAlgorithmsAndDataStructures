const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"],
    1: 1,
    "x x x": 3
};

console.log(cat.name); // Whiskers
console.log(cat["x x x"]); // 3

delete cat["1"];

// .hasOwnProperty
console.log(cat.hasOwnProperty("x x x")); // true

function checkObj(obj, checkProp) {
    return obj.hasOwnProperty(checkProp);
}
