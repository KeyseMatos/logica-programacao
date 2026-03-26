// 7. Organização de Fila: Prioridade no Início
//Objetivo: Utilizar .unshift() para adicionar elementos no início do vetor.
//Entrada: Um vetor com nomes: ["Maria", "João"] e o comando para adicionar "Ana" no início.
//Saída: Vetor final com "Ana" na primeira posição.

// Criamos um array com dois nomes: "Maria" e "João"
var nome = ["Maria", "João"]

// Usamos unshift() para adicionar "Ana" no início do array
// A função unshift() também retorna o **novo tamanho do array**, que aqui está sendo guardado na variável "adicionar"
var adicionar = nome.unshift("Ana")

// Mostramos o array atualizado no console
// Agora o array tem "Ana" na primeira posição, seguido de "Maria" e "João"
console.log(nome) // Saída: ["Ana", "Maria", "João"]