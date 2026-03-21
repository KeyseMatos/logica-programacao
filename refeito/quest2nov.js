// Aprovação por média com recuperação - Contexto: Um aluno tem 2 notas e pode fazer recuperação - Entradas: 
// nota1, nota2, notaRec (number) - Regras: média >= 7 - aprovado 
// média < 4 - reprovado / senão - recuperação / (se notaRec >= 6 aprovado, senão reprovado)
//  -Saída: situação final.

var nota1 = 7
var nota2 = 4
var rec = 8

var media = (nota1 + nota2) / 2

if (media >= 7 ) {
    console.log("Aprovado")
} else if (media < 4 ) {
    console.log("Reprovado")
} else {
    if (rec >= 6){
        console.log("Aprovado")
    } else {
        console.log("Reprovado")
    }
}
