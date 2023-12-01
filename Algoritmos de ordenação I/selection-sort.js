const livros = require('./lista-livros.js');
const menorValor = require('./menor-valor.js');

// for (let atual = 0; atual < livros.length - 1; atual++) {
//   let menor = menorValor(livros, atual);

//   console.log('posição atual:', atual)
//   let livroAtual = livros[atual];
//   console.log('livro atual:', livros[atual])
//   let livroMenorPreco = livros[menor];
//   console.log('livro menor preco:', livros[menor])
  
//   livros[atual] = livroMenorPreco;
//   livros[menor] = livroAtual;
// }

livros.forEach((_, indice) => {
  let menor = menorValor(livros, indice)

  let livroAtual = livros[indice];
  let livroMenorPreco = livros[menor];

  livros[indice] = livroMenorPreco
  livros[menor] = livroAtual
})

console.log(livros)
