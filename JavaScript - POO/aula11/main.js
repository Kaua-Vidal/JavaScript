class Person {
    constructor(fistName, lastName, age) {
        this.fistName = fistName
        this.lastName = lastName
        this.age = age
    }


    getFullName() {
        console.log(`${this.fistName} ${this.lastName}`)
    }

    static peak() {
        console.log('Hello world!')
    }
}

const person = new Person('jane', 'doe', 40)

person.getFullName()
Person.speak()

//Metodos estaticos não são chamados com informações como o getFullName

