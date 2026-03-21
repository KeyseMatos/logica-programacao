// Aprovação por média com recuperação - Contexto: Um aluno tem 2 notas e pode fazer recuperação - Entradas: nota1, nota2, notaRec (number) - Regras: média >= 7 - aprovado 
// média < 4 - reprovado / senão - recuperação / (se notaRec >= 6 aprovado, senão reprovado) -Saída: situação final.

var nota1 = 4;
var nota2 = 5;
var notaRec = 7;

var media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log("Situação: Aprovado");
} else if (media < 4) {
    console.log("Situação: Reprovado");
} else {
    if (notaRec >= 6) {
        console.log("Situação: Aprovado na recuperação");
    } else {
        console.log("Situação: Reprovado na recuperação");
    }
}