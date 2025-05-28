for (let i = 0; i < 10; i++) {
}

const cars = ['Ferrari', 'Tesla', 'Mercedes']

for (let i = 0; i < cars.length; i++){

}

for (let car of cars){
    //console.log(car)
}

cars.forEach(function(car, index) {
    //console.log(index)
    //console.log(car)
})

//While

let index = 1
while (index <= 10){
    //console.log(`Index é ${index}`)
    index++
    if (index == 10) {
        //console.log('Chegamos ao final')
    }
}

//For IN (Em objetos)

const person = {
    name: 'Jane',
    age: 23,
}

for (i in person){
    console.log(person[i])
}

