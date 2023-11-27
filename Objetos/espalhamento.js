const cliente = {
  nome: 'João',
  idade: 24,
  email: 'joao@firma.com',
  telefone: ['18 998763654', '14 998763407'] 
};

cliente.enderecos = [
  {
  rua: 'Rua João João',
  numero: 1337,
  apartamento: true,
  complemento: 'ap 71'
  }
];

function ligaParaCliente(telefoneComercial, telefoneResidencial){
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
  destinatario: cliente.nome,
  // enderecos: cliente.enderecos[0]
  ...cliente.enderecos[0]
};

console.log(encomenda)