class Car {
    #brand;
    #model;
    #speed;
    isTrunkOpen;

    constructor (carDetails) {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
        this.speed = 0;
        this.isTrunkOpen = false;
    }

    displayInfo() {
        const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';

        console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h Trunk: ${trunkStatus}`);
    }

    go() {
        if (this.speed < 200 && !this.isTrunkOpen) {
            this.speed += 5;
        }
    }

    brake() {
        if (this.speed > 0) {
            this.speed -= 5;
        }
    }

    openTrunk() {
        if (this.speed === 0) {
            this.isTrunkOpen = true;
        }
    }

    closeTrunk() {
        this.isTrunkOpen = false;
    }
}

class RaceCar extends Car {
    acceleration;

    constructor(carDetails) {
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go() {
        if (this.speed < 300) {
            this.speed += this.acceleration;
        }
    }

    openTrunk() {
        // console.log('No trunk')
    }

    closeTrunk() {
        // console.log('No trunk')
    }
}

const car1 = new Car({
    brand: 'Toyota',
    model: 'Corolla'
});

const car2 = new Car({
    brand: 'Tesla',
    model: 'Model 3'
});

const raceCar = new RaceCar({
    brand: 'McLaren',
    model: 'F1',
    acceleration: 20
});

// console.log(car1);
// console.log(car2);
// console.log(raceCar);

car1.openTrunk();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();

car2.openTrunk();
car2.go();
car2.closeTrunk();
car2.go();
car2.go();

raceCar.openTrunk();
raceCar.go();
raceCar.go();
raceCar.brake();

// car1.displayInfo();
// car2.displayInfo();
// raceCar.displayInfo();