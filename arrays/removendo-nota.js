// removendo elemento no array
const notas = [10, 6, 8, 5.5, 10]
notas.pop(4)
const media = (notas[0] + notas[1] + notas[2] + notas[3])/4;

console.log(notas, `${notas.length} elementos nesse array!`)
console.log(`A média é ${media}`)

// documentação MDN sobre array https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

// const arrayVazia = [,,,];
// console.log(arrayVazia.length)
// arrayVazia.push(50)
// console.log(arrayVazia)
// console.log(arrayVazia.length)

// O JavaScript manteve as posições vazias e adicionou o 50 ao final do array. Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número 50). Chamamos este tipo de estrutura de array esparso

jantarDeHoje = ['🍔', '🌭', '🍕']

jantarDeHoje.pop()
jantarDeHoje.pop()

jantarDeHoje.push('🍳')
jantarDeHoje.push('🥗')
jantarDeHoje.push('🍏')

console.log(jantarDeHoje)

// a pizza e o cachorro quente não estão presentes por conta do código jantarDeHoje.pop(), que remove o último elemento da lista e o ovo, a salada e a maçã verde entraram na lista com comando push.