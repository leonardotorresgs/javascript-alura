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

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes('enderecos')){
  console.error('Erro! É necessário ter um  endereço cadastrado.')
}
