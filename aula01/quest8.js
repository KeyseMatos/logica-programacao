// Plano de assinatura por tipo de clienteContexto: Um sistema cobra diferente para PF e PJ.
// Entradas: tipoCliente (string: "PF" I "PJ"),faturamento (number) - Regras (exemplo):
// PF -> plano fixo R$ 29,90 - PJ: faturamento < 10k-R$99 | 10k a 50k R$ 199 |  > 50k - R$399
//Saída: valor do plano e categoria

var faturamento = 1000;
var categoria = "PF";

var tabelatipoCliente = {
    "PF": 29.90,
    "PJ": {
        "menor10k": 99,
        "entre10k50k": 199,
        "maior50k": 399
    }
};
var valorPlano = 0;

var valorPlano = tabelatipoCliente[categoria];

if (categoria === "PJ") {
    if (faturamento < 10000) {
        valorPlano = tabelatipoCliente[categoria]["menor10k"];
    } else if (faturamento >= 10000 && faturamento <= 50000) {
        valorPlano = tabelatipoCliente[categoria]["entre10k50k"];
    } else {
        valorPlano = tabelatipoCliente[categoria]["maior50k"];
    }
}
console.log("Tipo de cliente: " + categoria);
console.log("Valor do plano: R$ " + valorPlano.toFixed(2));