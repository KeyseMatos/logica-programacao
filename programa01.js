const prompt = require('prompt-sync')()

let opcao = ' ' //Pegar a opção desejada no menu

// Variáveis que usarei para formar listas e etc. declarando elas globalmente

let contador = 0; // O contador tem que ser let pois ele é alterado quando peço para ele contar de 1 a 1  e o const não pode ser alterado
const cliente = [];
const produto = [];
const quantidade = [];
const setor = [];
const prazo = [];

while (opcao !== '5'){
    console.log("===============MENU===========")
    console.log("1. Cadastrar Pedido")
    console.log("2. Listar Pedido")
    console.log("3. Resumo Gerencial")
    console.log("4. Buscar Pedido")
    console.log("5. Sair")

    opcao = prompt("Digite a opção desejada no menu acima: "); // será pedido ao usuário o que ele deseja fazer em qual parte do menu ele deseja navegar

    //1. Cadastrar Pedido
    if (opcao === '1'){
        console.log("O seu pedido é o PED" ,contador++);
        const nome = String(prompt("Digite o nome do cliente: "));
        cliente.push(nome);
        const item = String(prompt("Digite o nome do produto: "));
        produto.push(item);
        const qtd = Number(prompt(`Digite a quantidade do(a) ${produto}: `));
        quantidade.push(qtd);
        const set = String(prompt(`Digite o seu setor ${cliente} : `));
        setor.push(set);
        const praz = Number(prompt("Digite o prazo: "));
        prazo.push(praz);
    //2. Listar Pedido 
    }else if(cliente.length === 0){
        console.log("Ação encerrada pois não existe nenhum produto cadastrado!")
        }else{
            console.log("====================LISTA DE PEDIDO==================")
            for(i = 0; i < cliente.length; i++)
            console.log(`Pedido: ${contador} | Cliente: ${cliente} | Produto: ${produto} | Quantidade: ${quantidade} | Setor: ${setor} | Prazo: ${prazo} `)
    }

}
