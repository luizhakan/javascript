const listaDeChamada = ['Juliana', 'João', 'Hakan', 'Ariel', 'Renata']

// listaDeChamada.splice(3,2, 'Rodrigo') // os 3 parâmetros usado no splica foram : o número 3 indicou onde ele começa remover do índica ou seja, do 'Ariel', e o número 2 em seguida significa quantos valores seguintes ele vai remover. e o 'Rodrigo' é o 3º parâmetro, o parâmetro que eu posso adicionar oq eu quiser!

const listaDeChamada2 = listaDeChamada + [', Rodrigo'] // aqui eu coloquei a listaDeChamada dentro da listaDeChamada2 e adicionei mais um elemento numa array sem remover ninguém!


// console.log(`Lista de chamada: ${listaDeChamada}`)

console.log(listaDeChamada2)

listaDeChamada.splice(5,0, 'Rodrigo', 'Hacker') // o primeiro parâmetro (5) indica o índice que eu vou começar, o segundo parâmetro (0), indica que eu não vou remover nenhum item da lista, e o terceiro e quarto parâmetro ('Rodrigo', 'Hacker') indica os valores que eu vou adicionar na lista

console.log(listaDeChamada)