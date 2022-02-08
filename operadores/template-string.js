const nome = "Ju";
const idade = 2021-1981;
const cidadeDeNascimento = "Recife";

/*
modo mais inviável e trabalhoso

const apresentacao = 'Meu nome é ' + nome + ', tenho ' + idade + ' anos' + ', e nasci em ' + cidadeDeNascimento; 

*/

// modo template string (o melhor e mais organizado!)

const apresentacao = `Meu nome é ${nome}, tenho ${idade} anos e nasci em ${cidadeDeNascimento}`

console.log(apresentacao)