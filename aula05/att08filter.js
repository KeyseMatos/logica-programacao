//8. Filtragem: Números Pares
//jetivo: Utilizar .filter() para selecionar apenas números pares.
//trada: Um vetor: [1, 2, 3, 4, 5, 6].
//ída: Um novo vetor contendo apenas os números pares.

// Criamos um array chamado "num" com os números de 1 a 6
var num = [1, 2, 3, 4, 5, 6]

// Usamos filter() para criar um novo array chamado "pares"
// A função dentro do filter verifica cada número:
// se o número dividido por 2 tiver resto 0 (num % 2 === 0), ele é par
// Apenas os números pares passam na "peneira" do filter e entram no novo array
var pares = num.filter(num => num % 2 === 0 )

// Mostramos o resultado no console, juntando com uma mensagem
// Saída esperada: "Os números pares são: 2,4,6"
console.log("Os números pares são: " + pares)