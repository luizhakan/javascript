const paciente = {
  nome: "James T.",
  idade: 30,
  email: "jt@email.com",
  identificacao: "Alpha0121331",
  funcao: "comandante",
  peso: 80.1,
  altura: 1.8,
  IMC: function () {
    return this.peso / Math.pow(this.altura, 2);
  },
  nomeCompleto: function () {
    console.log(this.nome);
  },
};

let dados = "";

for (let info in paciente) {
  if (typeof paciente[info] === "object" || paciente[info] === "function") {
    continue;
  } else {
    dados += `${info} ==> ${paciente[info]}\n`;
  }
}

console.log(dados);