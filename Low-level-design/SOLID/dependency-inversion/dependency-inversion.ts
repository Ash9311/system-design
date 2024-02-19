// The Dependency Inversion Principle (DIP) states that high-level modules should not depend on low-level modules. 
// Both should depend on abstractions. Additionally, abstractions should not depend on details. Details should depend on abstractions.
//  In the context of a Vehicle example, we can demonstrate this principle by using interfaces as abstractions for vehicle functionality.

interface Engine {
    start(): void;
    stop(): void;
}

interface Movement {
    move(): void;
}

class CarEngine implements Engine {
    start() {
        console.log("car enginer started.");
    }
    stop() {
        console.log("car enginer stopped.");

    }
}

class MotorcycleEngine implements Engine {
    start() {
        console.log("motorcycle enginer started");
    }
    stop() {
        console.log("motorcycle engine stopped.");

    }
}

class CarMovement implements Movement {
    move() {
        console.log(`Car moving.`);

    }
}

class MotocycleMovement implements Movement {
    move() {
        console.log(`motorcycle moving`);

    }
}

// Define high-level modules that depend on abstractions
class Car_di {
    private engine: Engine;
    private movement: Movement;

    constructor(engine: Engine, movement: Movement) {
        this.engine = engine;
        this.movement = movement;
    }

    start() {
        this.engine.start();
    }

    stop() {
        this.engine.stop();
    }

    move() {
        this.movement.move();
    }
}

class Motorcycle {
    private engine: Engine;
    private movement: Movement;

    constructor(engine: Engine, movement: Movement) {
        this.engine = engine;
        this.movement = movement;
    }

    start() {
        this.engine.start();
    }

    stop() {
        this.engine.stop();
    }
    move() {
        this.movement.move();
    }
}

const carEngine = new CarEngine();
const carMovement = new CarMovement();
const car = new Car_di(carEngine, carMovement);

const motorcycleEngine = new MotorcycleEngine();
const motorcycleMovement = new MotocycleMovement();
const motorcycle = new Motorcycle(motorcycleEngine, motorcycleMovement);

car.start(); // Car engine started.
car.move(); // Car moving.
car.stop(); // Car engine stopped.

motorcycle.start(); // Motorcycle engine started.
motorcycle.move(); // Motorcycle moving.
motorcycle.stop(); // Motorcycle engine stopped.

// We define interfaces Engine and Movement to abstract the functionality of vehicle engines and movement.
// Concrete classes CarEngine, MotorcycleEngine, CarMovement, and MotorcycleMovement implement these interfaces
//  to provide specific implementations for cars and motorcycles. The Car and Motorcycle classes depend on the abstractions
//  Engine and Movement, allowing us to easily change the engine or movement behavior without modifying the high-level classes.
//  This demonstrates the Dependency Inversion Principle.