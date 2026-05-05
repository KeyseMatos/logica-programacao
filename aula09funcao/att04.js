//3. Com funções:
//Tipo de retorno BOOLEAN (processamento com saída para sabermos se é primo ou não)
//Tipo VOID (exibição de mensagem)
//Fazer um programa que solicite um número do usuário e verifique se é um número primo invocando as funções.

const prompt = require('prompt-sync')();

function verificarNumeroPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function mostrarResultado(numero, ehPrimo) {
    if (ehPrimo) {
        console.log('É primo.')
    } else {
        console.log('Não é primo.');
    }
}

let valor = parseInt(prompt('Qual o numero? '));
let resultado = verificarNumeroPrimo(valor);
mostrarResultado(valor, resultado);

