const cliente = {
  nome: 'André',
  idade: 32,
  cpf: '50345679805',
  email: 'andre@dominio.com'
}

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);

console.log(`Os três primeiros dígitos do CPF são: ${cliente.cpf.substring(0, 3)}`);