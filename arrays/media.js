const notas = [10, 6, 8];
notas.push(7) // o javascript vai pegar esse dado e colocar como último elemento da array notas
console.log(notas, notas.length, 'elementos nesse array!') // o notas.lenght depois de notas vai me dizer quantos elementos eu tenho nessa array

let media = (notas[0] + notas[1] + notas[2] + notas[3] /4)/notas.length

console.log(media)