//2 – Escrever um programa que leia 10valores inteiros e ao final exiba a soma dos números positivos. 

const prompt = require("prompt-sync")();

let soma = 0

for(let i = 0; i <10; i++){
    let num = parseInt(prompt("Digite o número: " + i + ": "))
    if(num > 0){
        soma = soma + num
    }
}
console.log("Soma dos positivos/; " , soma)