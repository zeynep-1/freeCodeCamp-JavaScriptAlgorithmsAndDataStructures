function Bird() {
    let hatchedEgg = 10;

    this.getHatchedEggCount = function () {
        return hatchedEgg;
    };
}

let ducky = new Bird();
ducky.getHatchedEggCount();