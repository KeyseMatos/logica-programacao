//6. Histórico de Ações: Remoção do Último Registro
//Objetivo: Utilizar .pop() para remover a ação mais recente.
//Entrada: Um vetor com ações: ["Login", "Visualizar", "Logout"].
//Saída: Ação removida ("Logout") e vetor com as ações restantes.

// Criamos uma lista de ações que foram feitas pelo usuário
var acao = ["Login", "Visualizar", "Logout"]

// Usamos pop() para remover o último elemento da lista
// E guardamos esse elemento removido na variável "ultimaacao"
var ultimaacao = acao.pop()

// Mostramos qual foi a ação removida
console.log("Ação Removida: " + ultimaacao)

console.log("----------------------------")

// Mostramos as ações que sobraram depois de remover a última
console.log("As ações são: " + acao)
