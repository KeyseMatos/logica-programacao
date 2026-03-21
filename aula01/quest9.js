// Simulador de caixa (saldo pode ficar negativo?) - Contexto: Um app bancário autoriza ou 
// nega transação - Entradas: saldo (number), valorCompra (number), temLimite (boolean)
//limite (number) Regras: se saldo >= valorcompra ->aprova
//senão, se temLimite e (saldo + limite) >= valorCompra ->aprova usando | limite senão ->nega
//Saída: "Aprovado"/"Negado" e saldo final (se aprovado)

var saldo = 100;
var valorCompra = 150;
var temLimite = true;
var limite = 60;

if (saldo >= valorCompra) {
    saldo -= valorCompra;
    console.log("Transação aprovada. Saldo final: R$ " + saldo.toFixed(2));
} else if (temLimite && (saldo + limite) >= valorCompra) {
    var valorUsadoLimite = valorCompra - saldo;
    saldo = 0;
    console.log("Transação aprovada com uso do limite. Saldo final: R$ " + saldo.toFixed(2) + " (Limite usado: R$ " + valorUsadoLimite.toFixed(2) + ")");
} else {
    console.log("Transação negada. Saldo insuficiente.");
}     
