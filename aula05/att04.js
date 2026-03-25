//4. Gerenciamento de Lista: Compras
//Objetivo: Aprender a utilizar métodos dinâmicos para inserir (push) e remover (shift) elementos.
//Entrada: Um vetor vazio [] e comandos para adicionar "Arroz", "Feijão" e "Leite".
//Saída: O item removido ("Arroz") e a lista final contendo apenas os dois itens restantes.

var compras = [] //uma lista vazia a qual receberá valores nos proximos

compras.push("Arroz", "Feijão", "Leite") // o push serve para adicionar itens a lista que estava vazia

compras.shift("Arroz") // o shift serve para remover itens da lista

console.log(compras) // exibir a lista com os itens adicionados e removidos