const livros = require('./listaLivros.js');

let maisBarato = 0
for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual].preco < livros[maisBarato].preco) {
    maisBarato = atual;
  }
}

console.log(livros);
console.log(`O livro mais barato é ${livros[maisBarato].nome}, custa R$${livros[maisBarato].preco}`);
