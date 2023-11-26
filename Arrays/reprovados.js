const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7,  4.5,  8, 7.5];

const reprovados = alunos.filter((aluno, indice) => {
  return medias[indice] < 7;
})

//quando não utilizamos o primeiro parâmetro podemos trocá-lo por um underline
const aprovados = alunos.filter((_, indice) => {
  return medias[indice] >= 7;
})

console.log(reprovados);
console.log(aprovados);