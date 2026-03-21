//4 - Escreva um programa que leia 3 medidas de lados de um triângulo. Primeiro o programa
//  irá verificar se é um triângulo e após, comparar seus lados exibindo ao usuário o tipo de
//  triângulo, sendo que: Equilátero: Possui os 3 lados iguais -Isósceles: Possui apenas 2 lados iguais
//Escaleno: Possui todos os lados diferentes

var lado1 = 3
var lado2 = 5
var lado3 = 4

if  (
    lado1 + lado2 > lado3&&
    lado1 + lado3 > lado2&&
    lado2 + lado3 > lado1
){
    console.log("Triângulo")
    console.log("-----------------")
}

if (lado1 == lado2 && lado2 == lado3) {
    console.log("Triângulo  Equilátero")
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    console.log("Triângulo Isósceles")
} else {
    console.log("Triângulo Escaleno")
}