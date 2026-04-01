const prompt = require('prompt-sync')()

let opcao = ''

while (opcao !== '3'){
    console.log('\n=============MENU=============')
    console.log('1. Cadastrar Aluno')
    console.log('2. Listar Aluno')
    console.log('3. Sair')
    opcao = prompt ('Opção: ')
}