const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678912",
    email: "andrem@email.com"
}

                //0     //1
const chaves = ["nome", "idade", "cpf", "email"]

// console.log(cliente[chaves[0]])  // nesse console, eu vou na const cliente e chamo a const chaves por notação de colchetes, e em chaves eu chamo o índice 0, que é o item nome da const cliente
chaves.forEach(info=> console.log(cliente[info]))  // forEach é um método de array no javascript

console.log(cliente["nome"]) // também posso usar esse método de notação de colchete e chamar direto a chave nome

console.log(cliente["conta"]) // aqui ele vai dar undefined, ou seja, indefinido, não existe essa chave conta, ele não vai dar erro de sintaxe porque não está errado