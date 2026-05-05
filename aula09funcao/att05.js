// 4. Faça um programa que pergunte o nome, as horas trabalhadas e o valor da hora ao usuário.
//
// Calcule o salário bruto dentro de uma função, recebendo como parâmetro
// as horas trabalhadas e o valor da hora.
//
// Crie outra função que verifique se o salário bruto é menor do que R$ 2.000,00.
// Caso seja, acrescente um bônus de R$ 200,00 no valor total.
//
// O valor retornado final será:
// salário + adicional (se aplicável) 

const prompt = require('prompt-sync')();

function calcularSalario(horas, valorHora) {
    let resultado = valorHora * horas;
    return resultado;
}
function salarioBonus(salario) {
    let bonus = 200
    if (salario < 2000) {
        let salarioComBonus = salario + bonus;
        return salarioComBonus;
    } else {
        return salario;
    }
}
let nome = prompt('qual o seu nome? ');
let valorHora = Number(prompt('qual o valor por hora? '));
let horas = Number(prompt('quantas horas trabalhadas? '));
let salario = calcularSalario(horas, valorHora);
let salarioFinal = salarioBonus(salario);

console.log('seu salario:', salarioFinal); 