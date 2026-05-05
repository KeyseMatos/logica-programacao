//2. Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é suficientemente longa. 
// Assumindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre da sua altura, faça um programa para ler os dados necessários 
// e calcular a altura do prédio, colocando o cálculo dentro de uma função.

function ehPrimo(num) {
if (num <= 1) return false;
for (let i = 2; i <= Math.sqrt(num); i++) {
if (num % i === 0) return false;
}
return true;
}

// Função VOID (exibe mensagem)
function mostrarResultado(num) {
if (ehPrimo(num)) {
console.log(`${num} é um número primo.`);
} else {
console.log(`${num} NÃO é um número primo.`);
}
}

// Programa principal
let numero = Number(prompt("Digite um número: "));
mostrarResultado(numero);