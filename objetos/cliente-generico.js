function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    saldo += valor;
  };
}

const luiz = new Cliente("Luiz", 12345679812, "luizhakan@email.com", 100);
console.log(luiz);