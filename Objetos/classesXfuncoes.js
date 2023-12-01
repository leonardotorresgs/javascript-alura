  // função construtora de objetos (função que faz papel de uma classe)
// const Livro = function(nome, editora, paginas) {
//   gNome = nome,
//   gEditora = editora,
//   gPaginas = paginas

//   this.getNome = function() {
//     return gNome
//   }
//   this.getEditora = function() {
//     return gEditora
//   }
//   this.getPaginas = function(){
//     return gPaginas
//   }
// }

// const GraphQL = new Livro("GraphQl", "Casa do Código", 143)

// console.log(GraphQL.getNome())
// console.log(GraphQL.getEditora())
// console.log(GraphQL.getPaginas())

  // As funções são objetos em JavaScript
  // prototype

  // com isso
// const nome = "Alura"
//   // JavaScript faz isso
// const temp = new String(nome)
// console.log(temp.toString())

  ////////////////////

class Livro {
  constructor(nome, editora, paginas){
  this.nome = nome
  this.editora = editora
  this.paginas = paginas
  }
  anunciarTitulo(){
    console.log(`Título: ${this.nome}`)
  }
  descreverTítulo(){
    console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`)
  }
}

const NodeJS = new Livro("Primeiros passos com NodeJS", "Casa do Código", 195)

NodeJS.anunciarTitulo()
NodeJS.descreverTítulo()

console.log(typeof Livro)

  // classes são syntatic sugar
  // classes não são hosted (sem hosting)

  // classe que herda propriedade de outra classe
class LivroColecao extends Livro {
  constructor(nome, nomeColecao){
    super(nome)
    this.nomeColecao = nomeColecao
  }

  descreverColecao(){
    console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
  }
}

const LogicaDeProgramacao = new LivroColecao("Lógica de Programação", "Comece a Programar")
LogicaDeProgramacao.descreverColecao()
