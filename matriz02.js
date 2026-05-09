let linha = 3;
let coluna = 4;
let contador = 20;
let matriz = [];
let max = 20;
let min = 10;

function gerarMatrizAleatoria(linha, coluna, max, min){
    let matrizAleatoria = [];

    for (let i = 0; i < linha; i++){
        matrizAleatoria[i] = [];

        for (let j = 0; j < coluna; j++){
            matrizAleatoria[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

        return matrizAleatoria;
}
let resultado = gerarMatrizAleatoria(coluna, linha, max, min);

console.log(resultado);