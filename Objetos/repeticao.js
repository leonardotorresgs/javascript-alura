const cliente = {
  nome: 'João',
  idade: 24,
  email: 'joao@firma.com',
  telefone: ['18998763654', '14998763407'] 
};

cliente.enderecos = [
  {
  rua: 'Rua João João',
  numero: 1337,
  apartamento: true,
  complemento: 'ap 71'
  }
];

for (let chave in cliente) {
  let tipo = typeof cliente[chave];

  if (tipo !== 'object' && tipo !== 'function'){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}
