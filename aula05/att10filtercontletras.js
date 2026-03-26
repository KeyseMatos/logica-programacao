//10. Filtragem: Nomes com Mais de 4 Letras
//jetivo: Utilizar .filter() para selecionar strings com tamanho maior que 4.
//trada: Um vetor: ["Ana", "Bruno", "Carlos", "Eva"].
//ída: Um vetor contendo apenas os nomes com mais de 4 letras.

// Criamos um array chamado "nomes" com quatro nomes
var nomes = ["Ana", "Bruno", "Carlos", "Eva"]

// Usamos filter() para criar um novo array chamado "maior4"
// A função dentro do filter percorre cada elemento do array
// Aqui, cada elemento é chamado de "nomes" (mas poderia ser "nome" para ficar mais claro)
// A condição "nomes.length > 4" verifica se o tamanho da string é maior que 4
// Apenas os nomes que passam nessa condição entram no novo array
var maior4 = nomes.filter(nomes => nomes.length > 4)

// Mostramos no console os nomes que têm mais de 4 letras
// Saída esperada: "Os nomes com mais de 4 letras são: Bruno,Carlos"
console.log("Os nomes com mais de 4 letras são: " + maior4)