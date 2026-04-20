// sistema de caixa eletronico interativo

// Importa uma biblioteca que permite ler o que o usuário digita no teclado
const prompt = require('prompt-sync')()

// Variável que guarda a opção escolhida no menu
let opcao = 0

// Variável que guarda o saldo da conta
let saldo = 0

// Array (lista) que guarda o histórico de movimentações (depósitos e saques)
let extrato = []

// Enquanto o usuário não escolher a opção 5 (sair), o programa continua rodando
while(opcao !== 5){

    // Mostra o menu na tela
    console.log("\n====== MENU ======")
    console.log("1. Consultar saldo")
    console.log("2. Depositar")
    console.log("3. Sacar")
    console.log("4. Extrato")
    console.log("5. Sair")
    
    // Pede para o usuário digitar uma opção e transforma em número
    opcao = Number(prompt("Digite a opção desejada: "))

    // Verifica qual opção o usuário escolheu
    switch(opcao){

        case 1:
            // Mostra o saldo atual com 2 casas decimais
            console.log("Saldo: R$ " + saldo.toFixed(2))
            break

        case 2:
            // Pergunta quanto o usuário quer depositar
            let deposito = Number(prompt("Insira o valor que deseja depositar: R$ "))

            // Verifica se o valor é inválido (zero ou negativo)
            if (deposito <= 0){
                console.log("Valor inválido!")
            } else {
                // Soma o valor ao saldo
                saldo += deposito

                // Guarda essa operação no extrato
                extrato.push(`Depósito: +R$ ${deposito.toFixed(2)}`)

                // Mensagem de sucesso
                console.log("Depósito realizado com sucesso!")
            }
            break

        case 3:
            // Pergunta quanto o usuário quer sacar
            let saque = Number(prompt("Valor do saque: R$ "))

            // Verifica se o valor é inválido
            if (saque <= 0){
                console.log("Valor inválido!")
            } 
            // Verifica se o saldo é suficiente
            else if (saque > saldo){
                console.log("Saldo insuficiente!")
            } 
            else {
                // Subtrai o valor do saldo
                saldo -= saque

                // Registra no extrato
                extrato.push(`Saque: -R$ ${saque.toFixed(2)}`)

                // Mensagem de sucesso
                console.log("Saque realizado com sucesso!")
            }
            break

        case 4:
            // Mostra o extrato (histórico)
            console.log("\n==== EXTRATO ====")

            // Se não houver movimentações
            if (extrato.length === 0){
                console.log("Nenhuma movimentação.")
            } else {
                // Percorre a lista e mostra cada item
                extrato.forEach(item => console.log(item))
            }

            // Mostra o saldo atual no final do extrato
            console.log("Saldo atual: R$ " + saldo.toFixed(2))
            break

        case 5:
            // Encerra o programa
            console.log("Saindo do sistema...")
            break

        default:
            // Caso o usuário digite uma opção inválida
            console.log("Opção inválida!")
    }
}