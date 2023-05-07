const user = { name: 'John Doe', age: 34 };

const userName = user.name;
const userAge = user.age;

const { name, age } = user;

const { name: objectName, age: objectAge } = user;

const user2 = {
    johnDoe: {
        age: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};
const { johnDoe: { age1, email } } = user2;
const { johnDoe: { age: userAge1, email: userEmail } } = user2;

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]

const [a1, b1, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a1, b1, c); // 1, 2, 5

let x = 8, y = 6;
[x, y] = [y, x]

const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
}

const profileUpdate2 = ({ name, age, nationality, location }) => {
}

const half = ({ max, min }) => (max + min) / 2.0;