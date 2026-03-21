//2 -  Escreva um algoritmo para que receba três diferentes números inteiros do usuário
//  e no final informe qual é o maior deles.

var numero1 = 12;
var numero2 = 13;
var numero3 = 14;

if (numero1 > numero2 && numero1 > numero3) {
    console.log("O maio número informado foi o: " , numero1);
} else if (numero2 > numero1 && numero2 > numero3){ 
    console.log("O maio número informado foi o: " , numero2);
} else {
    console.log("O maio número informado foi o: " , numero3)
}
