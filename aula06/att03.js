const vendas = [98, 254, 236, 256, 122, 114, 135]

var soma = 0
let maior100 = []
let maior = vendas[0]

for (let i = 0; i< vendas.length; i++){
    soma += vendas[i]

    if (vendas[i] > 100) {
    maior100.push(vendas[i])
    }
    if (vendas[i] > maior){
        maior = vendas[i]
    }
}

const media = soma / vendas.length

console.log("O total vendido foi de R$ " + soma)
console.log("--------------------------------------")
console.log("A média diária é de R$ " + media)
console.log("--------------------------------------")
console.log("Os valores maiores que R$100,00 foram: " + maior100)
console.log("--------------------------------------")
console.log("O maior valor foi R$ " + maior)