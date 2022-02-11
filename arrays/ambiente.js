let num = [5, 8, 2, 9, 3]

console.log(`Nossa array é ${num}`)

console.log(`O vetor tem ${num.length} itens`)

console.log(num[1])
console.log(`Essa aqui é a let num ordenada ${num.sort()}`)

// for (let i = 0; i < num.length; i++){
//     console.log(i, num[i])
// }

for(let i in num) /* para cada índice na variável num*/ {
    console.log(`A posição ${i}, tem o valor ${num[i]}`) // mostre a posição através do num[i]
}

console.log(num.indexOf(8)) // javascript, tem o valor 8 nessa variável? tem, e está na posição 3 (ah, porque na posição 3?? por causa do num.sort() na linha 8)