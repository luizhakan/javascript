// let x = "";
// console.log(x)
// x = "oi";

// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
                    //2 -> valor da função soma
function imprimeTexto(texto){
    console.log(texto)
}

// EXECUÇÃO DE FUNÇÃO

// 2) executa a função (1 ou + vezes)

imprimeTexto(soma())
// imprimeTexto("outro texto")
// imprimeTexto("mais outro")

// três formas de escrever funções

function soma(){
    // podemos ter outros códigos, e a linha de retorno tem que ser o último comando do bloco, linhas depois do retorno não serão executadas

    return 2 + 2; // nesse caso eu quero que ela me retorne o 2 + 2 e não armazene numa const ou let!!!
}

// console.log(soma())

// documentação MDN com operações matemáticas https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#description

const numero = 9;
const raiz = Math.sqrt(numero);
console.log(raiz)
