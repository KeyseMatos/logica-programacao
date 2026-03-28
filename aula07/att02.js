// 03 Contar produto sem estoque - identificar estouqe baixo <5 - informar total de reposição

// Array com a quantidade de produtos em estoque
const estoque = [2, 0, 3, 4, 0, 96]

// Contador de produtos sem estoque (igual a 0)
let semestoque = 0

// Contador de produtos com estoque baixo (< 5)
let estoquebaixo = 0

// Loop que percorre todo o array
for (let i = 0; i < estoque.length; i++) {
    
    // Verifica se o produto está sem estoque
    if (estoque[i] == 0) {
        semestoque++

    // Se NÃO for zero, verifica se é menor que 5 (estoque baixo)
    } else if (estoque[i] < 5) {
        estoquebaixo++
    }
}

// Exibe a quantidade de produtos sem estoque
console.log("Sem estoque: " + semestoque)
console.log("-------------------------------")
// Exibe a quantidade de produtos com estoque baixo
console.log("Estoque baixo: " + estoquebaixo)