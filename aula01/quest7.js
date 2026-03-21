// Juros por atraso em boleto Contexto: Boleto tem multa + juros por dia - Entradas: valorBoleto (number), diasAtraso (number) - Regras: se diasAtraso == 0->paga valor normal
// senão -> multa fixa 2% + juros 0,1% ao dia - Saída: valor final.

var valorBoleto = 100;
var diasAtraso = 5;

var valorFinal = valorBoleto;

if (diasAtraso > 0) {
    valorFinal += valorBoleto * 0.02; // multa de 2%
    valorFinal += valorBoleto * 0.001 * diasAtraso; // juros de 0,1% ao dia
}

console.log("Valor final: R$ " + valorFinal.toFixed(2));