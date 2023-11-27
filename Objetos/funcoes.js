const cliente = {
  nome: 'João',
  idade: 24,
  email: 'joao@firma.com',
  telefone: ['18998763654', '14998763407'] ,
  saldo: 200,
  efetuaPagamento: function (valor){
    if (valor > this.saldo){
      console.log ('Saldo insuficiente');
    }
    else{
      this.saldo -= valor;
      console.log(`Pagamento realizado! Novo saldo de R$${this.saldo}`)
    }
  }
};

cliente.efetuaPagamento(150);

