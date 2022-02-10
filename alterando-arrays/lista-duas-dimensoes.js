// índice do índice 0 da let listaDeNotasEAlunos
const alunos = ['João', 'Juliana', 'Caio', 'Ana']

// índice do índice 1 da let listaDeNotasEAlunos
const médiaDosAlunos = [10, 7, 9, 6]

                    // índice 0   // índice 1
let listaDeNotasEAlunos = [alunos, médiaDosAlunos]

console.log(`${listaDeNotasEAlunos[0][0]}, sua nota é ${listaDeNotasEAlunos[1][0]}. ${listaDeNotasEAlunos[0][1]}, sua nota é ${listaDeNotasEAlunos[1][1]}. ${listaDeNotasEAlunos[0][2]}, sua nota é ${listaDeNotasEAlunos[1][2]}. ${listaDeNotasEAlunos[0][3]}, sua nota é ${listaDeNotasEAlunos[1][3]}!`)


// 
// idades = [30, 35, 28]
// nomes = ["Ana", "Juliana", "Leonardo"]
// faculdade = [false, true, true]

// funcionarios = [nomes,idades,faculdade]

// precisamos de 2 colchetes “[][]”. O primeiro colchete será usado para escolher qual dos 3 arrays dentro de funcionarios será acessado. podendo ser
// 0 -> nomes
// 1 -> idades
// 2 -> faculdade

// O segundo colchete será usado para acessar a informação dentro do array escolhido.

// concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.

// Separar um array em partes com slice();
// Remover e incluir novos elementos em um array com splice();
// Concatenar elementos em um único array com concat();