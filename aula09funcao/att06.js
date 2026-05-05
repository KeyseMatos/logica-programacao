//5Faça um programa usando menu interativo em loop. O usuário deve digitar um número e logo após deverão ser mostradas as opções abaixo para o mesmo.
//  O cálculo de cada opção deverá ser chamado através de função.Exemplo de saída:

const prompt = require("prompt-sync")();

// função 1: soma de 0 até N
function soma(n) {
    let total = 0;

    for (let i = 0; i <= n; i++) {
        total = total + i;
    }
    return total;
}
// função 2: fatorial
function fatorial(n) {
    let total = 1;

    for (let i = 1; i <= n; i++) {
        total = total * i;
    }

    return total;
}
let opcao = "";

while (opcao != "0") {
    console.log("\n ========== MENU ==========");
    console.log("1 - Soma de 0 até N");
    console.log("2 - Fatorial de N");
    console.log("0 - Sair");
    opcao = prompt("escolha uma opcao:");

    if (opcao == "1") {
        let numero = Number(prompt("Digite um número inteiro positivo: "));
        let resultado = soma(numero);
        console.log("Soma de 0 até " + numero + " = " + resultado);

    } else if (opcao == "2") {
        let numero = Number(prompt("Digite um número inteiro positivo: "));
        let resultado = fatorial(numero);
        console.log("Fatorial de " + numero + " = " + resultado);

    } else if (opcao == "0") {
        console.log("Saindo do programa...");

    } else {
        console.log("Opção inválida!");
    }
}
