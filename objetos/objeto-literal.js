const objPersonagem = {
  nome: "Dean",
  profissao: "Caçador",
  musicas: "Rock",
};

const objPersonagem2 = objPersonagem;
objPersonagem2.nome = "Dean Winchester";

console.log(objPersonagem); // { nome: 'Dean Winchester', profissao: 'Caçador', musicas: 'Rock' }
console.log(objPersonagem2); // { nome: 'Dean Winchester', profissao: 'Caçador', musicas: 'Rock' }
/*Por que ele alterou os dois? a variável objPersonagem2 não fez uma cópia, apenas serviu como REFERÊNCIA ao objeto original, assim quando altera um dos objetos, altera ambos */

/*Então como eu posso alterar o valor somente de um deles?*/
const objPersonagem3 = Object.create(objPersonagem);
console.log((objPersonagem3.nome = "Dean 'Hunter' Winchester"));
/*Object.create() cria um novo objeto usando como prototipo o objeto via parâmetro*/
