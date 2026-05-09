let linha = 5;
let coluna = 5;
let contador = 2;

let matriz = [];

for (let i = 0; i < linha; i++) {
    matriz[i] = [];

for (let j = 0; j < coluna; j++){
    matriz[i][j] = contador;
    contador++
}
}

console.log(matriz);