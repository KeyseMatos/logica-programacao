// 5.  Filtragem: Verificação de Maioridade
//Objetivo: Aplicar lógica condicional ou métodos de alta ordem (filter) para extrair subconjuntos de dados.
//Entrada: Um vetor de idades: [12, 18, 25, 10, 30, 15].
//Saída: Um novo vetor contendo apenas os valores >= 18.

// Aqui a gente cria uma lista (array) com várias idades
var idades = [12, 18, 25, 10, 30, 15]

// Agora vamos criar uma nova lista chamada "maiores"
// Usando o "filter", que é como uma peneira que só deixa passar quem atende a regra
// A regra é: pegar cada "idade" da lista e verificar se é maior ou igual a 18
// O primeiro idade pode ser qualquer nome e o => é uma condição para receber a condição
var maiores = idades.filter(idade => idade >= 18)

// Por fim, mostramos no console a nova lista com só as idades que passaram na regra
console.log(maiores) // Vai mostrar: [18, 25, 30]
