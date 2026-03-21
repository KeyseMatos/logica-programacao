// Tarifa de entrega por região + valor do pedido Contexto: Um delivery cobra frete diferente - Entradas:bairro (string), valorPedido (number)
// Regras (exemplo): bairros: "Centro" frete 5, "Brotas" frete 8, "Itapuã" frete 12, outros frete 15
// se valorPedido >= 80-> frete grátis | Saída: valor do frete e total a pagar.

var bairro = "Centro"
var pedido = 189

var tabelafrete = {
    "Centro": 5,
    "Brotas": 8,
    "Itapuão": 12

} 
if (pedido >= 80 ) {
    var pedidofrete = pedido + tabelafrete
    console.log("O valor do pedido é de R$ " + pedido)
    console.log("--------------------------------------------------------------------------------")
    console.log("O valor do pedido com o frete é de R$ " + pedidofrete)
} else {
    var pedidofrete1 = pedido + 15
    console.log("O valor do pedido é de R$ " + pedido + " O valor do frete é de R$ " + "15")
    console.log("--------------------------------------------------------------------------------")
    console.log("O valor do pedido com o frete é de R$ " + pedidofrete1)
}