// Tarifa de entrega por região + valor do pedido Contexto: Um delivery cobra frete diferente - Entradas:bairro (string), valorPedido (number)
// Regras (exemplo): bairros: "Centro" frete 5, "Brotas" frete 8, "Itapuã" frete 12, outros frete 15
// se valorPedido >= 80-> frete grátis | Saída: valor do frete e total a pagar.

var bairro = "Centro";
var valorPedido = 81;

var tabelaFrete = {
    "Centro": 5,
    "Brotas": 8,
    "Itapuã": 12
};

var frete = tabelaFrete[bairro] || 15;

if (valorPedido >= 80) {
    frete = 0;
}

var total = valorPedido + frete;

console.log("Pedido: R$ " + valorPedido);
console.log("------------------")
console.log("Frete: R$ " + frete);
console.log("------------------")
console.log("Total: R$ " + total);
