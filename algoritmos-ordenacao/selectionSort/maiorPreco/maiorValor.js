function maiorValor(arrProdutos, posicaoInicial) {
  let maiorPreco = posicaoInicial;

  for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco > arrProdutos[maiorPreco].preco) {
      maiorPreco = atual;
    }
  }
  return maiorPreco;
}

module.exports = maiorValor;