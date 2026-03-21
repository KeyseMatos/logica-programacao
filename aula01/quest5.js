// Conta de energia por faixa de consumo | Contexto: Energia cobra por faixa (kWh). - Entradas: consumoKwh (number)
// Regras (exemplo): * até 100 - R$ 0,60 por kWh | * 101 a 200 - R$ 0,75 por kWh | * acima de 200 - R$ 0,90 por kWh - Saída: valor total da conta

var consumoKwh = 150;

var tabelaConsumo = {
    "100": 0.60,
    "101a200": 0.75,
    "acima200": 0.90
};

var valorTotal = 0;

if (consumoKwh <= 100) {
    valorTotal = consumoKwh * tabelaConsumo["100"];
} else if (consumoKwh <= 200) {
    valorTotal = consumoKwh * tabelaConsumo["101a200"];
} else {
    valorTotal = consumoKwh * tabelaConsumo["acima200"];
}

console.log("Consumo: " + consumoKwh + " kWh");
console.log("------------------")
console.log("Valor total: R$ " + valorTotal.toFixed(2)); // serve para formatar um número com 2 casas decimais. - Ele é muito usado para valores em dinheiro.