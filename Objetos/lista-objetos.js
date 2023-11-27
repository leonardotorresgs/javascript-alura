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

cliente.enderecos.push({
  rua: 'Rua Joseph Ladder',
  numero: 404,
  apartamento: false,
  complemento: ''
})

const listaApenasAps = cliente.enderecos.filter((endereco) => endereco.apartamento === true);

console.log(listaApenasAps);