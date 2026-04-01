//--------------------------------------------------------------Missão 03 Sistema de Notas-----------------------------------------------

// Importa o pacote prompt-sync (permite digitar no teclado)
const prompt = require("prompt-sync")();

// Cria um array vazio para armazenar os alunos
let alunos = [];

// Laço que vai repetir 3 vezes (para 3 alunos)
for (let i = 0; i < 3; i++) {

    // Pede o nome do aluno
    let nome = prompt("Digite o nome do aluno: ");

    // Pede a nota e converte para número
    let nota = Number(prompt("Digite a nota do aluno: "));

    // Adiciona um objeto com nome e nota dentro do array
    alunos.push({ nome, nota });
}

// Percorre o array para verificar cada aluno
for (let i = 0; i < alunos.length; i++) {

    // Verifica se a nota é maior ou igual a 7
    if (alunos[i].nota >= 7) {
        // Se for, aluno aprovado
        console.log(alunos[i].nome + " foi APROVADO");
    } else {
        // Se não, aluno reprovado
        console.log(alunos[i].nome + " foi REPROVADO");
    }
}