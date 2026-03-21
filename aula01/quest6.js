// Validação de senha simples - Contexto: Cadastro exige senha forte mínima - Entradas: senha (string) - Regras (sem usar laço): se senha.length < 8-inválida | 
// senão se senha contém "123" -> inválida | senão -> válida | Saída: "Senha válida" ou motivo da falha

var senha = "minhasenha12";

if (senha.length < 8) { //length significa tamanho da string.
    console.log("Senha inválida: menos de 8 caracteres.");
} else if (senha.includes("123")) { //includes() verifica se um texto existe dentro de outro texto.
    console.log("Senha inválida: contém sequência '123'.");
} else {
    console.log("Senha válida."); // Se nenhuma das condições anteriores aconteceu.
}

console.log("Processamento concluído.");