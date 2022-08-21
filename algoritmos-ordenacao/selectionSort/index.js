const livros = require('./listaLivros');
const menorValor = require('./menorPreco/menorValor');
const maiorValor = require('./maiorPreco/maiorValor');

console.log("Método sort maior preço\n");
console.log(livros.sort((p, s) => {
    if(p.preco > s.preco) return -1;
    if(p.preco < s.preco) return 1;
    return 0;
}
));

console.log("\nMétodo sort menor preço\n");
console.log(livros.sort((p, s) => {
    if(p.preco < s.preco) return -1;
    if(p.preco > s.preco) return 1;
    return 0;
}));

for(let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];
    
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);
console.log('\n');

for(let atual = 0; atual < livros.length; atual++){
    let maior = maiorValor(livros, atual);

    let livroAtual = livros[atual];
    let livroMaiorPreco = livros[maior];

    livros[atual] = livroMaiorPreco;
    livros[maior] = livroAtual;

}

console.log(livros);
