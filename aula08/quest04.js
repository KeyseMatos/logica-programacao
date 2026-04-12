//Escrever um programa que leia uma quantidade desconhecida de números inteiros e conte quantos deles estão nos seguintes intervalos: 
// [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve terminar quando for lido um número negativo. 

//const prompt = require("prompt-sync")();

let i = 11; 
let somaMultiplos6 = 0; 
let qtddMultiplos6 = 0;

while(i <= 210){
    if(i % 6 === 0){
        console.log(i, " ");
        somaMultiplos6 = somaMultiplos6 + i;
        qtddMultiplos6++;
    }
    i++;
}
console.log("Média: " , somaMultiplos6/qtddMultiplos6);