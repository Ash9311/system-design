// The Dependency Inversion Principle (DIP) states that high-level modules should not depend on low-level modules. 
// Both should depend on abstractions. Additionally, abstractions should not depend on details. Details should depend on abstractions.
//  In the context of a Vehicle example, we can demonstrate this principle by using interfaces as abstractions for vehicle functionality.

interface Engine {
    start();
    stop();
}

interface Movement {
    move();
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
        console.log("car enginer stopped.");

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
}