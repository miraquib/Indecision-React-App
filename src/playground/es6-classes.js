

class Person {
    constructor  (name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreetings() {
        return `Hi, I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years(s) old.`
    }

}

class Traveller extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreetings() {
        let greeting = super.getGreetings();

        if(this.hasHomeLocation()) {
            return greeting += ` I am visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Traveller('Aqib Abass', 27, 'Chicago');
console.log(me.getGreetings());

const other = new Traveller();
console.log(other.getGreetings());