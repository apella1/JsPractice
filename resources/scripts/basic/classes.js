// the constructor method is used to initialize the properties of an object
// if the constructor method is not included, js automatically adds an empty constructor method


class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }

    startRunning(speed) {
        this.speed = speed;
        return `${this.name} is running at ${this.speed} miles per hour.`
    }

    stopRunning() {
        this.speed = 0;
        return `${this.name} stopped running.`
    }
}

let animal = new Animal('Cat');

console.log(animal.startRunning(8));

class Dog extends Animal {
    bark() {
        return `${this.name} is barking.`
    }
}

let scooby = new Dog('Scooby');

console.log(scooby.bark());
console.log(scooby.startRunning(60));
console.log(scooby.stopRunning());
