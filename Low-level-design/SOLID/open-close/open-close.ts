// Define an abstract base class for vehicles
abstract class AVehicle {

    protected make: string;
    protected model: string;
    protected year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Abstract method to calculate the price
    abstract calculatePrice(): number;
}

// Concrete implementation of Vehicle for a Car
class Car extends AVehicle {
    private numDoors: number;

    constructor(make: string, model: string, year: number, numDoors: number) {
        super(make, model, year);
        this.numDoors = numDoors;
    }
    // Override the calculatePrice method for Car
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

// We have concrete implementations of Vehicle for Car and Motorcycle.
// Each concrete vehicle type implements its own calculatePrice method,
// allowing for different pricing logic.
// If we want to add new vehicle types (e.g., Truck, Bicycle),
// we can do so by creating new classes that extend Vehicle without modifying the existing code.
//  This demonstrates the Open/Closed Principle.