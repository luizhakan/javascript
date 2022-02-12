const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

// callback
// notas.forEach(nota =>{
//     somaDasNotas += nota
// })

// metodo com o function normal
notas.forEach(function(nota){
                // nota[i]
    somaDasNotas += nota
})

let media = somaDasNotas/notas.length

console.log(media)

// a função forEach tem o nome de callback e vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente.

// o forEach permite usar outras funções dentro ou fora dela

// Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função informada tiver um return em seu escopo.