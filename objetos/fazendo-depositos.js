const cliente = {
  nome: "André",
  idade: 36,
  cpf: "12345678912",
  email: "andrem@email.com",
  telefones: ["8198546464", "8198989898"],
  dependentes: [
    {
      nome: "Sara Silva",
      parentesco: "filha",
      dataNascimento: "20/03/2011",
    },
    {
      nome: "Samia Maria",
      parentesco: "filha",
      dataNascimento: "04/01/2014",
    },
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
};

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);
