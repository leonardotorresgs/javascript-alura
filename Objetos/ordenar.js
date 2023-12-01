const clientes = require("./clientes.json");

function ordenar(lista, propriedade) {
  const resultado = lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1;
    }
    else if (a[propriedade] > b[propriedade]) {
      return 0;
    }
  });

  return resultado;
}

const  ordenandoNome = ordenar(clientes, "nome");

console.log(ordenandoNome);