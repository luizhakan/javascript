const cliente = [
  {
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
  },
  {
    nome: "Sophie Raquel",
    idade: 54,
    cpf: 78945612312,
    email: "sophie-raquel@net.com",
    telefone: 81985073119,
    dependentes: {
      nome: "Rayssa",
      parentesco: "filha",
      dataNascimento: "25/07/2000",
    },
  },
];



const listaDependentes = [...cliente];

listaDependentes.forEach((familia) => {
    console.table(familia.dependentes);
})

// console.table(listaDependentes);
