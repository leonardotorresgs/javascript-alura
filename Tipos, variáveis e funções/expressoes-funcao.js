// declaração de função

function minhaFuncao(param) {
  //bloco de código
}


//expressão de função

console.log(soma(1, 1))
const soma = function(num1, num2) {return num1 + num2}


// diferença principal: HOISTING
//funcoes e var são 'listadas' no topo do arquivo

console.log(apresentar())

function apresentar() {
  return "Olá"
}

