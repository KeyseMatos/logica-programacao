const num1 =  12
const num2 = 2
var operacao = "/"

if (operacao == "+") {
    soma = num1 + num2
    console.log("O resultado da soma é: ", soma)
} else if(operacao == "-"){
    subtracao = num1 - num2
    console.log("O resultado da subtração é: ", subtracao)
} else if (operacao == "*"){
    multiplicacao = num1 * num2
    console.log("O resultado da multiplicação é: ", multiplicacao)
} else if (operacao == "/"){
    if (num2 == 0){
        console.log("Operação inválida o segundo número deve ser maior que 0 ")
    } else {
        divisao = num1 / num2
        console.log("O resultado da divisão é: ", divisao)
    }
}