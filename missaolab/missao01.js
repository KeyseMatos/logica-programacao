//----------------------------------------------------------------------Missão 01 - Cadastro de nomes------------------------------------

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



