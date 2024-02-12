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
const varProperties: VehicleProperties = {
    make: "Toyota",
    model: "fortuner",
    year: 2024
}

