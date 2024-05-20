class Car {
    brand;
    model;
    speed;

    constructor (carDetails) {
        this.brand = carDetails.brand;
        this.model = carDetails.model;
        this.speed = 0;
    }

    displayInfo() {
        console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h`);
    }

    go(rate) {
        if (this.speed < 200) {
            this.speed += rate;
        }
    }

    brake(rate) {
        if (this.speed > 0) {
            this.speed -= rate;
        }
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

console.log(car1);
console.log(car2);

car1.go(100);
car1.go(95);
car1.go(5);
car1.go(5);
car1.go(5);

car2.go(45);
car2.brake(5);
car2.brake(5);

car1.displayInfo();
car2.displayInfo();