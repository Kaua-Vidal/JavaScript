class Animal {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`${this.name} fez algum barulho`)
    }
}


class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    speak() {
        console.log(`Dog ${this.name} latiu!`)
    }
}

const animal = new Animal('Simba')
const dog = new Dog('Bob')
dog.speak()
