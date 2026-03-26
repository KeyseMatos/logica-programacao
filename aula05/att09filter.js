//9. Filtragem: Valores Maiores que 10
//jetivo: Utilizar .filter() para extrair valores maiores que 10.
//trada: Um vetor: [5, 12, 8, 20, 3].
//ída: Um novo vetor com os valores maiores que 10.

// Criamos um array chamado "num" com os números: 5, 12, 8, 20, 3
var num = [5, 12, 8, 20, 3]

// Usamos filter() para criar um novo array chamado "maior10"
// A função dentro do filter verifica cada número:
// se o número for maior que 10 (num > 10), ele passa na "peneira"
// Apenas os números maiores que 10 entram no novo array
var maior10 = num.filter(num => num > 10)

// Mostramos o resultado no console, junto com uma mensagem
// Saída esperada: "Os números maiores que 10 são: 12,20"
console.log("Os números maiores que 10 são: " + maior10)