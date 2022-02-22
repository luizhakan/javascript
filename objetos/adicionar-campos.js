const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678912",
    email: "andrem@email.com"
}

cliente.telefone = "40028922" // aqui eu chamo o objeto e usando o .fone eu adiciono nele um noto campo
console.log(cliente) // apartir daqui ele vai exibir também o telefone

cliente.telefone = "87456598"
console.log(cliente)

// quando a chave não existe no objeto (cliente.telefone), o javascript vai criar se a gente mandar, mas quando ela já existe e a gente alterar, ela somente vai alterar