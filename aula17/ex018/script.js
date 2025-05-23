let n = document.getElementById('num')
let numeros = document.getElementById('numeros')
let res = document.getElementById('res')
let num = []
num.sort()

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function add() {
    if(isNumero(n.value) && !inLista(n.value, num)) {
        num.push(Number(n.value))
        let item = document.createElement('option')
        item.text = `Número ${n.value} adicionado`
        numeros.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    n.value = ''
    n.focus()
}

function finalizar() {
    if (num.length == 0) {
        window.alert ('Adicione valores antes de finalizar')
    } else {
        let tot = num.length
        let maior = num[num.length - 1]
        let menor = num[0]
        let soma = 0
        let media = 0

        for (let pos in num){
            soma += num[pos]
        2}
        media = soma / num.length

        res.innerHTML = ''
        if (num.length == 1){
            res.innerHTML += `<p>Há um total de ${tot} número cadastrado`
        } else {
            res.innerHTML += `<p>Há um total de ${tot} números cadastrados.`
            res.innerHTML += `<p>O maior número na lista é o ${maior}`
            res.innerHTML += `<p>O menor número na lista é o ${menor}.`
            res.innerHTML += `<p>A soma de todos os valores é igual a ${soma}`
            res.innerHTML += `<p>A média de todos os valores é igual a ${media}`
        }
        
    }
}






/*
function add() {
    if (n.value > 100 || n.value < 1 || n.value == 0) {
        window.alert ('[ERRO] Número inválido, tente outra vez!')
    } else {
        num.push(n.value)
        let item = document.createElement('option')
        item.text = `Numero ${n.value} adicionado`
        numeros.appendChild(item)
        
    }
}

function finalizar(){
    res.innerHTML += `<br>Ao todo, temos ${num.length} números cadastrados`
    
    res.innerHTML += `<br>O maior valor informado foi o ${num[num.length-1]}`
    res.innerHTML += `<br>O menor valor informado foi ${num[0]}`
    
    for (let c = 0; c < num.length; c++) {
        
    }
    
}
    */