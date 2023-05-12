const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

console.log("Alan" in users); // true

for (let user in users) {
    console.log(user);
}
/*
Alan
Jeff
Sarah
*/

function countOnline(allUsers) {
    let count = 0;
    for (const food in allUsers) {
        if (allUsers[food]["online"] == true) {
            count++;
        }
    }
    return count;
}
console.log(countOnline(users)); // 1

// Object.keys()

function getArrayOfUsers(obj) {
    return Object.keys(obj);
}
console.log(getArrayOfUsers(users)); // [ 'Alan', 'Jeff', 'Sarah' ]