const numbers = [1, 2, 3, 4, 5];

const numbersByTwo = numbers.map(function(item) {
    return item * 2
})

//Filter

const ages = [8, 13, 27, 22, 40]

const evenAges = ages.filter(function(age) {
    return age % 2 === 0
})

//reduce

const sumOfAges = ages.reduce(
    function(age, acc) {
    return acc + age
}, 0)

console.log(sumOfAges)