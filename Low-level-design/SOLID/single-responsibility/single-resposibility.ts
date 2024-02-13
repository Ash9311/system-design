interface VehicleProperties {
    make: string;
    model: string;
    year: number;
}

class VehicleInfo {
    constructor(private properties: VehicleProperties) {

    }

    getMake(): string {
        return this.properties.make;
    }

    getModel(): string {
        return this.properties.model;
    }

    getYear(): number {
        return this.properties.year;
    }
}

class VehicleOperations {
    start() {
        console.log("vehicle starting");
    }

    stop() {
        console.log("vehicle stopped");
    }

    accelerate(speed: Number) {
        console.log(`vehicle accelerated to ${speed}`);
    }

    brake() {
        console.log(`brakes have been applied`);
    }
}
// Define a class for the vehicle that combines information and operations
class Vehicle {
    private info: VehicleInfo;
    private operations: VehicleOperations;

    constructor(properties: VehicleProperties) {
        this.info = new VehicleInfo(properties);
        this.operations = new VehicleOperations();
    }

    getInfo(): VehicleInfo {
        return this.info;
    }

    getOperations(): VehicleOperations {
        return this.operations;
    }
}
const myCarProperties: VehicleProperties = {
    make: "Toyota",
    model: "fortuner",
    year: 2024
}

const myCar = new Vehicle(myCarProperties);
console.log(myCar.getInfo().getMake());
console.log(myCar.getInfo().getModel());
console.log(myCar.getInfo().getYear());

myCar.getOperations().start();
myCar.getOperations().accelerate(90);
myCar.getOperations().brake();
myCar.getOperations().stop();

//In this example, we have separate classes for handling vehicle information (VehicleInfo) and operations (VehicleOperations).
//The Vehicle class combines these two responsibilities without having to deal with the details of each. 
// This adheres to the Single Responsibility Principle, making the code easier to understand, maintain, and extend.
