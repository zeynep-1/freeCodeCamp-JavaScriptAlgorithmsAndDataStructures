// a new syntax to create objects, using the class keyword
// a class declaration has a constructor method that is invoked with the new keyword

// Explicit constructor
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
    takeOff() {
        console.log("To " + this.targetPlanet + "!");
    }
}
const zeus = new SpaceShuttle('Jupiter');
// To Jupiter!
zeus.takeOff();

// Implicit constructor 
class Rocket {
    launch() {
        console.log("To the moon!");
    }
}
const atlas = new Rocket();
// To the moon!
atlas.launch();