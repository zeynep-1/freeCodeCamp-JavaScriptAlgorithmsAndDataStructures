const getMousePosition = (x, y) => ({
    x: x,
    y: y
});

const getMousePosition2 = (x, y) => ({ x, y });

const createPerson = (name, age, gender) => {
    return {
        name, age, gender
    };
};

const person = {
    name: "Taylor",
    sayHello: function () {
        return `Hello! My name is ${this.name}.`;
    }
};

// same
const person2 = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};