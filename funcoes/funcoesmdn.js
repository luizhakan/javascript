// Declaração/Definição de Função
// fonte das informações obtidas para esse arquivo : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions
// Arquivo feito no node, caso queira usar no vscode e não estiver funcionando, recomendo adaptar ao vscode!

/*
Uma função é feita com uma palavra chave, seguida por :
1 - Nome da função
2 - Parâmetros (entre parênteses)
3 - Ações que ela vai tomar {entre chaves}
na declaração return, você especifica o valor retornado pela função

exemplo : 
function square(numero) {
  return numero * numero;
}

*/

// const numero = 10;
// console.log(numero)

// function square(numero) /*aqui eu defino minha função e chamo ela de square, em seguida eu defino o parâmetro, qual objeto ela vai manipular dentro dela*/{
//     return numero * numero;  // aqui eu uso a declaração de retorno para ele me enviar o resultado da multiplicação, para ser o novo valor do parâmetro dentro da função
// }

// console.log(`O resultado dessa função é : ${square(numero)}`)  // aqui eu usei template string pra o código ficar mais legível mesmo

// Outro exemplo :

// function parImpar/*chamada*/(n/*parâmetro*/){
//     // ação
//     if (n%2==0)/*Condição*/{
//         return 'par' // retorno
//     } else{
//         return 'ímpar'  // retorno
//     }
// }

// let res = parImpar(13)  // aqui eu crio uma variáel pra guardar o resultado da chamada da função que eu criei
// console.log(res)
// ou eu posso chamar a função direto do console
// console.log(parImpar(13))

// no javascript também é possível colocar uma função dentro de uma variável
// exemplo :
// let v = function(x){
//     return 2*x;
// }

// console.log(v(3/*parâmetro da function dentro da variável v*/))

// function fatorial(n){
//     let fat = 1;
//   for(let c = n; c > 1; c--){
//     fat *= c
//   }
//   return fat
// }
// console.log(fatorial(5))
// 5! (o ! significa fatorial) = 5 x 4 x 3 x 2 x 1 = 120

// outro exemplo de função fatorial declarando a função dentro da variável
// expressão de função
// let fatorial = function fac(n){
//   return n < 2? 1 : n*fac(n-1)
// };

// console.log(`Luiz, o seu atual saldo bancário é R$${fatorial(170)}!`)  // resultado deve ser 7.257415615307994e+306!

// function montadora(carro){
//   carro.make = "Impala";
// }

