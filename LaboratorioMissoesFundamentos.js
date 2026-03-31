//----------------------------------------------------------------------Missão 01 - Cadastro de nomes---------------------------------------------------------------------------

// Importa o pacote prompt-sync, que permite digitar no teclado (Node.js)
const prompt = require("prompt-sync")();

// Cria um array vazio para guardar os nomes
let nomes = [];

// Esse laço vai repetir 5 vezes (de 0 até 4)
for (let i = 0; i < 5; i++) {

    // Mostra uma mensagem e espera o usuário digitar um nome
    let nome = prompt("Digite um nome: ");

    // Adiciona o nome digitado dentro do array "nomes"
    nomes.push(nome);
}

// Mostra todos os nomes digitados no final
console.log("Nomes digitados:", nomes);

//------------------------------------------------------------------------Missão 02 - Soma de Valores--------------------------------------------------------------------------

// Cria um array vazio para guardar os números que o usuário vai digitar
const numeros = []

// Cria uma variável para somar os números
let soma = 0

// Laço de repetição que vai rodar 5 vezes
for (let i = 0; i < 5; i++){

    // Pede para o usuário digitar um número
    // Number() transforma o texto digitado em número de verdade
    let numero = Number(prompt("Digite um número: "));

    // Coloca o número digitado dentro do array "numeros"
    numeros.push(numero);

    // Adiciona o número à soma total
    soma += numero
}

// Mostra no console a soma de todos os números digitados
console.log("A soma dos números é: " + soma)

//------------------------------------------------------------------------Missão 03----------------------------------------------------------------------------