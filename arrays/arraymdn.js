let loja = [ 'monster', 'café', 'cookie', 'sucrilhos', 'coca-cola' ]

const sequence = [1, 1, 2, 3, 5, 8, 13];

let random = ['tree', 795, [0, 1, 2]];

let parDeArray = ['strip', 'tease', 69 [1969, 04, 19]];

loja[0] = 'redbull' // alterei o índice 0 de monster para redbull. computadores começam a contar do 0!!!

// uma array dentro de uma array é chamada de array multidimensional por exemplo : a array random tem outra array dentro dela

loja = [ 'redbull', 'café', 'cookie', 'sucrilhos', 'coca-cola', ['picanha', 'filé', 'cupim']]

loja[5].length // visto que eu adicionei outra array na loja? então, essa array eu deixei no índice 5, e no comando .length eu peço pra ele me dizer quantos itens tem nessa array da loja!

// mas pra simplificar, eu poderia criar uma variável com os valores e invés de colocar cada item na array, eu colocaria somente o nome da variável, oque ajudaria mais na manutenção do código!

for (let i = 0; /*comece o laço no item 0 do array */ i < sequence.length; i++) /* Pare o laço no item de número igual ao comprimento da array */ {console.log(sequence[i])}; /*Para cada item, imprima no console do navegador com console.log(). */

let sportDefesa = 'Carlos Eduardo, Sander, Thiery, Sabino, Ezequiel';

let divisao = sportDefesa.split(',') // peguei todos os nomes da lista e separei em strings diferentes, cada um nome agora virou um item, ou seja, transformei a variável sportDefesa em uma array, agora eu posso dar um divisao[0], ele vai me retornar o item do índice 0 (Carlos Eduardo)

divisao.push('Chico') // aqui eu pego a array divisao e com o comando .push eu adiciono o Chico na array divisao

let removerJogador = divisao.pop() // aqui eu uso o comando .pop para remover o último jogador da lista, ou seja, o chico. nisso eu acabo alterando a array divisao, deixando ela com somente 5 itens novamente

divisao.push(removerJogador) // aqui eu pego a let divisao e adiciono a let removerJogador dentro dela, adicionando novamente a array! 
// > console.log(divisao)
// > ['Carlos Eduardo',' Sander',' Thiery',' Sabino',' Ezequiel','Chico']

let jogadoresFavoritos = ['Everton Felipe', 'Allan', 'Juba', 'Blas', 'Bufalo']
jogadoresFavoritos.toString(); // facilmente alterei a array jogadoresFavoritos em string
