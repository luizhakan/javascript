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
  ],
};

cliente.dependentes.push({
  nome: "Samia Maria",
  parentesco: "filha",
  dataNascimento: "04/01/2014",
});

const filhaMaisNova = cliente.dependentes.filter(
  (dependente) => dependente.dataNascimento === "04/01/2014"
);

console.log(filhaMaisNova[0].nome);
