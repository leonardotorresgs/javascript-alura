const livros = require('./lista-livros')

function menorValor(arrProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;
  let maisCaro = 0;

  for(let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual;
    }
    else if (arrProdutos[atual].preco > arrProdutos[maisCaro].preco) {
      maisCaro = atual;
    }
  }
  return maisBarato;
}

module.exports = menorValor;

// console.log(`O livro mais barato é de ${livros[maisBarato].título} e custa R$${livros[maisBarato].preco}`);

// console.log(`O livro mais caro é de ${livros[maisCaro].título} e custa R$${livros[maisCaro].preco}`);
