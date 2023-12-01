const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

const numeros = [...numerosPares, ...numerosImpares]



/////////



// const num1 = 1
// const num2 = 2

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]

console.log(num1, num2, outrosNumeros)



/////////



// const [nome1 = 'Ju'] = [1]  -> retorna 1
const [nome1 = 'Ju'] = []

console.log(nome1)



/////////



const pessoa = {
  nome: 'Ju',
  idade: 25
}

const pessoaComTelefone = {...pessoa, telefone: '(18) 9999-9999'}

console.log(pessoa, pessoaComTelefone)

// const nome = pessoa.nome
const { nome } = pessoa
const { idade } = pessoa

console.log(nome, idade)



/////////



// function imprimeDados(dados) {
//   console.log(dados)
// }

// function imprimeDados(dados) {
//   const { nome, idade } = dados
//   console.log(nome, idade)
// }

function imprimeDados( { nome, idade}) {
  console.log(nome, idade)
}

imprimeDados(pessoa)