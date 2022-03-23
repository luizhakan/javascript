// Declaração/Definição de Função
// fonte das informações obtidas para esse arquivo : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions
// Arquivo feito no node, caso queira usar no vscode e não estiver funcionando, recomendo adaptar ao vscode!
/*
Aqui neste arquivo eu falo de declaração de funções, funções anônimas, escopo de funções, e arrow function
*/
/*
Uma função é feita com uma palavra chave, seguida por :
1 - Nome da função
2 - Parâmetros (entre parênteses)
3 - Ações que ela vai tomar {entre chaves}
na declaração return, você especifica o valor retornado pela função
*/

// declarando uma função
function square /*1*/(num /*2*/) {
  // 3
  return num * num;
}
console.log(`Resultado da função é ${square(10)}`); // neste console eu chamo a função square, e defino o 10 como parâmetro num, resultado é : 100

// uma função também pode ser anônima, ou seja, ela não tem que ter um nome para ser declarada
// exemplo:
let squad /*(1) na prática esse é o nome da função*/ = function (
  numero /*(2)*/
) {
  // (3)
  return numero * numero;
};
let x = squad(4); // aqui eu chamo a função que está na let squad e adiciono numa let x
console.log(`O resultado da váriavel x é ${x}`); // resultado : 16

// eu posso criar expressões de função, para criar funções anônimas
// exemplo :
let fatorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};
// nesta let fatorial eu crio uma função sem precisar declara-la fora, neste caso eu crio ela anonimamente somente para guardar numa variável
// agora quando eu quiser usar a função, eu só chamo pelo variável e defino um parâmetro
console.log(fatorial(5 /*aqui eu declaro que meu "n" é igual a 5*/)); // aqui a lógica dentro da let fatorial é : se "n" for menor que 2, então é 1, senão "n" * fac (n - 1)

// mesmo já tendo acima, é bom ressaltar como é uma chamada para função
console.log(square(5)); // aqui eu chamo a função square que está na linha 14 e atribuo um valor ao parâmetro dela!

// variável e função no escopo global

let num1 = 20,
  num2 = 3,
  nome = "xamã";

// esta variável está definida fora do escopo da função, ou seja, ela é uma variável global

function multiplica() {
  // aqui dentro é o escopo da função, onde eu posso criar minhas próprias variáveis!
  return num1 * num2; // resultado é 60
}
console.log(multiplica(num1, num2));

// aqui temos a criação de uma função usando método comum
let a = ["Hidrogênio", "Hélio", "Lítio", "Berílio"];
// let a2 = a.map(function(s){return s.length})
// console.log(a2)

// aqui temos uma função usando o arrow function
let a3 = a.map((s) => s.length);
console.log(a3);

// outro exemplo de arrow function
let awmul = (r) => r * r;
console.log(awmul(5));
// com o arrow function eu posso diminuir o tamanho do meu código, mas é sempre bom saber quando usá-lo.

// escopo de função
let efponto1 = 10;
let efponto2 = 5;

function pontuacao(nome) {
  function add() {
    return `Nome : ${nome}\nPontos: ${efponto1 + efponto2}`;
  }
  return add();
}
console.log(pontuacao("Luiz"));

/*
Neste exemplo eu crio uma função chamada pontuacao, digo que o parâmetro dela é nome, e dentro desta função, eu crio a funcao add, que vai me retornar o nome e os pontos, que eu usei variáveis no escopo global (ou seja, as duas variáveis que eu usei neste exemplo, pode ser usada em qualquer outra parte do código)
E no console.log eu somente chamei a função e defini o parâmetro 'Luiz'
*/
// escopo e pilha de função
function epfMul(x, y) {
  function square(m) {
    return m * m;
  }
  return square(x) + square(y);
}
epf = epfMul(2,2)
console.log('Função epfMul : ' + epf)

// nesse tipo de situação, a função interna (ou seja, a função square) só pode ser usada quando a função epfMul for chamada
// um ponto importante de saber também, é que a função interna forma uma closure, ou seja, ela pode usar argumentos e variáveis da função externa, mas a função externa não pode usar os argumentos e variáveis da função interna
