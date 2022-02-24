// let idade = 65;
// if(idade < 16 /*se idade for menor que 16, execute o console.log()*/){
//     console.log(`Sua idade é ${idade} anos, você não tem idade para votar.`)
// } else if(idade < 18 || idade >= 65)/* se idade menor que 18 ou idade maior ou  igual a 65 então execute o console.log()*/{
//     {
//     console.log(`Você tem ${idade} anos, você tem idade para votar opcionalmente.`)}} else /*Se idade não for menos que 18 e não for menor ou igual a 65, execute o console.log()*/{
//         console.log(`Você tem ${idade} anos, vota obrigatoriamente`)
//     }

let agora = new Date() // aqui eu chamo a função date e ponho ela dentro de uma variável
let hora = agora.getHours(); // aqui eu pego a variável "agora" e chamo a função getHours pra me dizer a hora atual do meu sistema!
// console.log(`Agora são ${hora} horas.`)
if(hora < 5){
    console.log(`Agora são ${hora} horas, boa madrugada!`)
} else if (hora < 12){
    console.log(`Agora são ${hora} horas, bom dia!`)
} else if (hora < 18){
    console.log(`Agora são ${hora} horas, boa tarde!`)
} else if (hora <= 23){
    console.log(`Agora são ${hora} horas , boa noite`)
}
