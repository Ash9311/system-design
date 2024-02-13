abstract class AVehicle {

    protected make: string;
    protected model: string;
    protected year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    abstract calculatePrice(): number;
}

class Car extends AVehicle {
    private numDoors: number;

    constructor(make: string, model: string, year: number, numDoors: number) {
        super(make, model, year);
        this.numDoors = numDoors;
    }

    calculatePrice(): number {
        return 1000000 + (this.year - 2000) * 500 + this.numDoors * 100000;
    }
}

class motorCycle extends AVehicle {
    private engineSize: number;

    constructor(make: string, model: string, year: number, engineSize: number) {
        super(make, model, year);
        this.engineSize = engineSize;
    }

    calculatePrice(): number {
        return 50000 + (this.year - 2000) * 300 + this.engineSize * 200;
    }
}


const _myCar = new Car("Toyota", "fortuner", 2024, 6);
console.log("car price: ", _myCar.calculatePrice());

const _myMotorCucle = new motorCycle('suzuki', "hayabusa", 2024, 500);
console.log("motorcycle price: ", _myMotorCucle.calculatePrice());

