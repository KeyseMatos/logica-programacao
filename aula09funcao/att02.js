//1. Faça um programa que recebe um valor inteiro e verifica se o valor é positivo ou negativo, para essa verificação deve se usar uma função. 
// A função deve retornar um valor booleano (true/false).

const prompt = require('prompt-sync')()

function teste(num){
    if (num >= 0){
        return true;
    }else{
        return false;
    }
}

let valor = parseInt(prompt("Digite um número: "))

if (teste(valor)){
    console.log("Positivo")
}else{
    console.log("Negativo")
}


