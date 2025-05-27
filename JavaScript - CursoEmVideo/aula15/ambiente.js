let num = [5, 8, 2, 9, 3]
console.log(`O primeiro número é ${num[0]} e o último é ${num[num.length-1]}`)

console.log('Esse é o nosso vetor: ')
let posicao = num.indexOf(5)
if (posicao == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${posicao}`)
}
