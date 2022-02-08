// parâmetros de função
            //2     //2
// function soma(num1, num2){
//     return num1 + num2;
// }

// console.log(soma(2, 2))
// console.log(soma(24, 24))
// console.log(soma(244, 244))
// console.log(soma(2444, 2444))

// parâmetros x argumentos

// ordem dos parâmetros

// function nomeIdade(nome, idade){
//     return `Meu nome é ${nome} e eu tenho ${idade} anos`;
// }

// console.log(nomeIdade('Ju', 40))

function soma(num1, num2){
    return num1 + num2;
}

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}
//                            
// console.log(multiplica(soma(4, 5), soma(3, 3)))  
// chamamos a função "multiplica" para multiplicar os números da função soma (4 + 5 e 3 + 3), logo em seguida, por ordem de precedência (já que a função soma estava dentro da função multiplica com parênteses, oque indica que tem que ser executada primeiro), foi executada a multiplicação da função soma usando a função multiplica

console.log(multiplica(soma(4, 5)))

function sport(time){
    console.log(`O campeão da Copa do Brasil 2008 é o ${time}`)
}

sport('Sport Recife!')

// Em JavaScript, os parâmetros de funções tem undefined como valor predefinido.