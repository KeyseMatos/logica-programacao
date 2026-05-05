//Escreva um programa que peça para o usuário preencher um vetor de números inteiros de 5 posições. Elabore funções que recebam esse vetor como argumento e façam: (cada)
// somaVetor: Recebe o vetor e retorna a soma de seus elementos. 
// multiplicaVetor: Calcula o produto dos elementos do vetor. 
// multiplicarPorCinco: Multiplica cada elemento do vetor por 5. 
// mudarElemento: Nessa função o usuário dirá o índice do vetor que deseja alterar e o número para substituir na posição desejada.
// ordenarVetor: Ordena o vetor em ordem crescente usando um algoritmo de ordenação simples (bubble sort). 
// inverterVetor: Inverte os elementos do vetor. 
// mostrarVetor: Exibe os elementos do vetor na tela. 
// O menu permite ao usuário escolher qual função deseja executar. 
// O programa continua até que o usuário escolha a opção de sair (0).
// Você poderá utilizar funções nativas do Javascript para as lógicas das funções.
// Exemplo de entrada inicial do programa (Menu):
// Escolha:
// 1. Soma do vetor
// 2. Produto do vetor
// 3. Multiplicar todos os elementos por 5
// 4. Mudar elemento do vetor
// 5. Ordenar vetor (Bubble Sort)
// 6. Inverter vetor
// 7. Mostrar vetor
// 0. Sair

const prompt = require("prompt-sync")();

let vetor = [];

console.log("Preencha o vetor com 5 números inteiros:");
for (let i = 0; i < 5; i++) {
    vetor[i] = Number(prompt(`Digite o ${i + 1}º número: `));
}



// ===== Menu =====
let opcao;

do {
    console.log("\n===== MENU =====");
    console.log("1. Soma do vetor");
    console.log("2. Produto do vetor");
    console.log("3. Multiplicar todos os elementos por 5");
    console.log("4. Mudar elemento do vetor");
    console.log("5. Ordenar vetor (Bubble Sort)");
    console.log("6. Inverter vetor");
    console.log("7. Mostrar vetor");
    console.log("0. Sair");

    opcao = Number(prompt("Escolha: "));

    switch (opcao) {
        case 1:
            console.log("Soma =", somaVetor(vetor));
            break;
        case 2:
            console.log("Produto =", multiplicaVetor(vetor));
            break;
        case 3:
            multiplicarPorCinco(vetor);
            console.log("Vetor atualizado!");
            break;
        case 4:
            mudarElemento(vetor);
            break;
        case 5:
            ordenarVetor(vetor);
            console.log("Vetor ordenado!");
            break;
        case 6:
            inverterVetor(vetor);
            console.log("Vetor invertido!");
            break;
        case 7:
            mostrarVetor(vetor);
            break;
        case 0:
            console.log("Saindo do programa...");
            break;
        default:
            console.log("Opção inválida!");
    }

} while (opcao !== 0);