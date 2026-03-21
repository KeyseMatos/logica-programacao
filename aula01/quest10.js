//Escolha de transporte por distância e orcamento Contexto: Pessoa quer ir para um local e escolhe 
// o melhor meio - Entradas: distanciaKm (number),orcamento (number) | Regras (exemplo):
//se distancia <= 2 -> "A pé" | senão se distancia <= 8 e orçamento >= 10 -> "Ônibus'
//senão se distância <= 15 e orçamento >= 25 -> "Moto/Carro por app"
//senão -> "Não é possível com esse orçamento* | Saída: sugestão final.

var distanciaKm = 10;
var orcamento = 20;
var transporte = "";

if (distanciaKm <= 2) {
    transporte = "A pé";
} else if (distanciaKm <=8 && orcamento >= 10) {
    transporte = "Ônibus";
} else if (distanciaKm <= 15 && orcamento >= 25) {
    transporte = "Moto/Carro por app"
} else{
    transporte = "Não é possível com esse orçamento"
}


console.log ("A distância é de  " + distanciaKm + " km");
console.log("---------------------------------------------");
console.log ("O orçamento é de  " + orcamento + " reais");
console.log("---------------------------------------------");
console.log("A opção que você deve escolher é: " + transporte);



