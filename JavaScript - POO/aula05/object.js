const person = {
    firstName: 'Felipe',
    lastName: 'Rocha',
    age: '21',
    hobbies: ['Assistir F1','Jogar Futebol','Ler'],
    dog: {
        name: 'Simba',
        age: 4
    }
}

//const firstName = person.firstName;
//const lastName = person.lastName
//const age = person.age
//const hobbies = person.hobbies

const {firstName, lastName, age, hobbies, dog} = person

console.log(firstName)
console.log(lastName)
console.log(age)
console.log(hobbies)
console.log(dog.name)
