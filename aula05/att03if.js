//3. Dado o vetor [5, -3, 8], verifique se o valor na posição 1 é menor do que Zero. Se sim, substitua o elemento por zero. 
// Mostre todo o vetor no final.

var num = [5, -3, 8]

if (num[1] < 0) { //se o segundo número for menor que 0, deve substituir o número por zero
    num[1] = 0
} else {
    console.log("O segundo número não é maior que 0")
}

console.log(num)