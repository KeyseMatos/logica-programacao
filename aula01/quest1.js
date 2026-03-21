// 1) Desconto progressivo na lojaContexto: Uma loja dá desconto baseado no valor da compra - Entradas (variáveis): valorCompra (number)
// Regras: <100 - sem desconto / 100 a 299.99 5% / 300 499.99- 10% / >=500 -> 15% - Saída: valor do desconto e valor final.

var valorCompra = 550; // Exemplo de valor de compra
var menor100 = valorCompra;
var entre100e299 = valorCompra * 0.05;
var entre300e499 = valorCompra * 0.10;
var maiorIgual500 = valorCompra * 0.15;

var valorDesconto100e299 =  valorCompra - entre100e299;
var valorDesconto300e499 = valorCompra - entre300e499;
var valorDesconto500mais = valorCompra - maiorIgual500;

if (valorCompra < 100) {
    console.log("Valor do desconto: R$ 0,00");
    console.log("---------------------------------------------")
    console.log("Valor final: R$ " + valorCompra);
    console.log("---------------------------------------------")
} else if (valorCompra >= 100 && valorCompra < 300) {
    console.log("Valor do desconto: R$ " + entre100e299);
    console.log("Valor final: R$ " + valorDesconto100e299);
    console.log("---------------------------------------------")
} else if (valorCompra >= 300 && valorCompra < 500) {
    console.log("Valor do desconto: R$ " + entre300e499);
    console.log("---------------------------------------------")
    console.log("Valor final: R$ " + valorDesconto300e499);
    console.log("---------------------------------------------")
} else {
    console.log("Valor do desconto: R$ " + maiorIgual500);
    console.log("---------------------------------------------")
    console.log("Valor final: R$ " + valorDesconto500mais);
    console.log("---------------------------------------------")
}



console.log("Valor da compra:", valorCompra);
console.log("---------------------------------------------")


