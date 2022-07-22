function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    saldo += valor;
  };
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo) // ele vai no constructor Cliente e chama as propriedades dele
    this.saldoPoup = saldoPoup;
    ClientePoupanca.prototype.depositarPoup = function(valor){
        this.saldoPoup += valor;
    } // um prototipo para adicionar um novo comportamento, uma nova função ao ClientePoupanca, já que eu só posso adicionar saldo com o Cliente
}

const luiz = new ClientePoupanca("Luiz", 12346579812, "luizhakan@email.com", 100, 200); // aqui eu crio uma nova instância de ClientePoupanca junto com as propriedades de Cliente

luiz.depositarPoup(20) // aqui eu faço um depósito para o saldo da poupança
console.log(luiz); 