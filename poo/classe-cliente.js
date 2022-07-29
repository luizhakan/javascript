class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Saldo adicionado : R$ ${this.saldo}`);
  }

  exibirSaldo() {
    console.log(`Saldo : R$ ${this.saldo}`);
  }
}

const luiz = new Cliente("Luiz", "luiz@email.com", 55566688812, 0);
console.log(luiz);
luiz.depositar(150);
luiz.exibirSaldo()
console.log(luiz);
