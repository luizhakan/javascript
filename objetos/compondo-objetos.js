const cliente = {
  nome: "André",
  idade: 36,
  cpf: "12345678912",
  email: "andrem@email.com",
  telefones: ["8198546464", "8198989898"],
};

cliente.dependentes = {
  nome: "Sara",
  parentesco: "filha",
  dataNascimento: "20/03/2011",
};
console.log(cliente);
cliente.dependentes.nome = "Sara Silva";
console.log(cliente);
