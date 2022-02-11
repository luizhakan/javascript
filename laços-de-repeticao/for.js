const lista = [100, 200, 300, 400, 500, 600]

    // a let i representa o valor 0 do índice da const lista

for (let i = 0; i < lista.length /* lista.length vai contar pra mim quantos itens tem nessa array */
    ; i++ /* = a i = i + 1, no lugar põe o i++ */){
    console.log(i, lista[i])
}

// é importante ter cuidado com as condições que colocamos no nosso laço, para não ter um involuntário loop infinito