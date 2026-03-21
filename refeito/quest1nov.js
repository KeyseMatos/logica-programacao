// 1) Desconto progressivo na lojaContexto: Uma loja dá desconto baseado no valor da compra - 
// Entradas (variáveis): valorCompra (number)Regras: <100 - sem desconto / 100 a 299.99 5% / 
// 300 499.99- 10% / >=500 -> 15% - Saída: valor do desconto e valor final.

var valor = 230

var valor1 = valor * 0.05
var valor1des = valor - valor1

var valor2 = valor * 0.10
var valor2des = valor - valor2

var valor3 = valor * 0.15
var valor3des = valor - valor3

if (valor < 100) {
    console.log("O valor da compra foi de: R$ " + valor + " Desconto não aplicado")
} else if (valor >= 100 && valor <= 299.99 ){
    console.log("O valor da compra foi de: R$ " + valor + " Desconto aplicado de R$ " + valor1)
    console.log("----------------------------------------------------------------------------------")
    console.log("O valor da compra com desconto aplicado foi de R$ " + valor1des)
} else if (valor >= 300 && valor <= 499.99) {
    console.log("O valor da compra foi de: R$ " + valor + " Desconto aplicado de R$ " + valor2)
    console.log("----------------------------------------------------------------------------------")
    console.log("O valor da compra com desconto aplicado foi de R$ " + valor2des)
} else if (valor >= 500) {
    console.log("O valor da compra foi de: R$ " + valor + " Desconto aplicado de R$ " + valor3)
    console.log("----------------------------------------------------------------------------------")
    console.log("O valor da compra com desconto aplicado foi de R$ " + valor3des)
} else {
    console.log("Compra Efetuada, obrigado!")
}
