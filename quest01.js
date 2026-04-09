//QUESTÃO 1 - Escrever um programa que leia a idade de 7 pessoas e no final diga quantas pessoas são maiores de idade (>= 18 anos). 
const prompt = require("prompt-sync")();

let maiores = 0;

for(let i = 0; i< 7; i++){
    let idade = parseInt(prompt("Digite a idade da pessoa " + i + ": "));
    if(idade >= 18){
        maiores++;
    }
}
console.log("Quantidade de pessoas maiores de idade: ", maiores);