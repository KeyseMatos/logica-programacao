// Controle de acesso por idade e autorizacão - Contexto: Evento com classificação indicativa - Entradas:idade (number), temAutorizacao (boolean)
// Regras: idade >= 18 ->entra / senão, se idade >= 16 e temAutorizacao , entra / senão, não entra / Saída: "Acesso liberado" ou "Acesso negado"

var idade = 17
var autorizacao = true

if (idade >= 18) {
    console.log("Acesso liberado")
} else if (idade >= 16 && autorizacao){
    console.log("Acesso liberado com autorização")
} else {
    console.log("Acesso negado")
}