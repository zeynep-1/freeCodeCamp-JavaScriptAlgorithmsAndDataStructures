class Book {
    constructor(author) {
        this._author = author;
    }

    // getter
    get writer() {
        return this._author;
    }

    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

// Getters and setters are important because they hide internal implementation details.

// Only change code below this line
class Thermostat {
    constructor(f) {
        this.f = f;
    }

    // getter
    get temperature() {
        return 5 / 9 * (this.f - 32);
    }

    // setter
    set temperature(updatedTemperature) {
        this.f = updatedTemperature * 9.0 / 5 + 32;
    }
}

const thermos = new Thermostat(76);
// Setting in Fahrenheit scale
let temp = thermos.temperature;
// 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius