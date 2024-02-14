// The Interface Segregation Principle (ISP) states that a client should not be forced to implement an interface that 
// it doesn't use. Instead of one large interface, smaller, more specific interfaces should be preferred. 
// In the context of a Vehicle example, we can demonstrate this principle by breaking down a large, generic interface
//  into smaller, more specific interfaces for different types of vehicles.

interface Car_is {
    start(): void;
    stop(): void;
    openSunroof(): void;
}

interface Motorcycle_is {
    start(): void;
    stop(): void;
    performWheele(): void;
}

//implement interface in concrete class
class ToyotaFortuner implements Car_is {
    start() {
        console.log(`toyota fortuner started`);
    }
    stop(): void {
        console.log(`toyota fortuner stopped`);

    }
    openSunroof(): void {
        console.log("Sunroof opened.");
    }
}

class HondaCBR implements Motorcycle_is {
    start(): void {
        console.log("Honda CBR started.");
    }

    stop(): void {
        console.log("Honda CBR stopped.");
    }

    performWheele(): void {
        console.log("Performed a wheelie.");
    }
}

function useCar(car: Car_is) {
    car.start();
    car.openSunroof();
    car.stop();

}

function useBike(bike: Motorcycle_is) {
    bike.start();
    bike.performWheele();
    bike.stop();
}

const myCar_is = new ToyotaFortuner();
const Motorcycle_is = new HondaCBR();

useCar(myCar_is);
useBike(Motorcycle_is);

// The ToyotaCamry and HondaCBR classes implement the Car and Motorcycle interfaces respectively,
//  providing implementations for the required methods.
// The useCar and useMotorcycle functions demonstrate that each type of vehicle can be used without 
// being forced to implement unnecessary methods, adhering to the Interface Segregation Principle.