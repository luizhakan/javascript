const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678912",
    email: "andrem@email.com"
}

console.log(`Meu nome é ${cliente.nome}, tenho ${cliente.idade} anos.`)
console.log(`3 primeiros digitos do CPF : ${cliente.cpf.substring(0,3)/*Nessa função substring(0,3) eu peço pra me mostrar o primeiro digito, até o 3 digito do índice do objeto que to selecionando*/}`)