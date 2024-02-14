// The Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects
//  of its subclasses without affecting the correctness of the program. In the context of a Vehicle example, 
//  this means that any subclass of Vehicle should be able to be used interchangeably with the Vehicle superclass.

class Vehicle_ls {
    constructor(private make: string, private model: string, private year: number) {

    }

    getDetails(): string {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }

    // Method to start the vehicle
    start(): void {
        console.log("Vehicle started.");
    }

    // Method to stop the vehicle
    stop(): void {
        console.log("Vehicle stopped.");
    }
}

class Car_ls extends Vehicle_ls {
    constructor(make: string, model: string, year: number) {
        super(make, model, year);
    }

    openSunroof() {
        console.log("sunroof open");

    }

}

class motorbike extends Vehicle_ls {
    constructor(make: string, model: string, year: number) {
        super(make, model, year);
    }
    performWheele() {
        console.log("perform wheele");
    }
}

function useVehicle(vehicle: Vehicle_ls) {
   console.log(vehicle.getDetails());
    vehicle.start();
    vehicle.stop();
}

const MyCar = new Car_ls("Toyota", "Fortuner", 2024,);
const Mymotorbike = new motorbike("suzuki", "hayabusa", 2023);

useVehicle(MyCar);
useVehicle(Mymotorbike);

// We have a base class Vehicle with common properties (make, model, year) and methods (getDetails, start, stop).
// We have two subclasses Car and Motorcycle which extend Vehicle and add their specific functionalities
// (openSunroof, performWheelie) respectively.
// The useVehicle function demonstrates that we can use objects of both Car and Motorcycle interchangeably with Vehicle,
//  fulfilling the Liskov Substitution Principle.