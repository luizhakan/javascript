const nomes = ['Juliana', 'João', 'Hakan', 'Ariel', 'Renata', 'Joyce', 'Mateus', 'Lucas', 'Luiz', 'Júnior']

const sala1 = nomes.slice(0, nomes.length/2)  // aqui eu peço que o slice (cortar) pegue a variável nome do índice zero, faça a contagem e divida ele em 2, assim armazenando somente metade da lista
const sala2 = nomes.slice(nomes.length/2) // aqui eu peço pro slice fazer a mesma coisa, e como o slice da sala1 é exclusivo, ou seja, já tá guardando os 5 primeiros da lista, o slice do sala2 pega o resto da lista para si

console.log(`Alunos da sala 1 : ${sala1}, e alunos da sala 2 : ${sala2}. No total ${nomes.length} alunos matriculados!`)