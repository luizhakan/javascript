const livros = require("./listaLivros.js");

let maiorPreco = 0;

for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual].preco > livros[maiorPreco].preco) {
    maiorPreco = atual;
  }
}

console.log(livros);
console.log(
  `\nO livro mais caro é ${livros[maiorPreco].nome}, custando R$${livros[maiorPreco].preco}`
);
