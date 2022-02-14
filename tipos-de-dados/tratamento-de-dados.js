/*
alert('Oii!')  // front-end (vai mostrar na tela)
console.log('Oii!')  // backend (vai mostrar no console)
confirm('Está gostando de JavaScript?')  // janela como botão ok e cancelar
prompt('Qual seu nome?')  // vai perguntar o nome
*/
// let nome = prompt('Qual seu nome?')
// alert(`Oi ${nome}, seja bem vindo!`)  // aqui eu estou usando template string!

const n1 = Number(prompt('Digite um número'))
const n2 = Number(prompt('Digite outro número'))
soma = n1 + n2
alert(`${n1} + ${n2} é igual a = ${soma}`)

// + para adição
// + para concatenação
// para ser adição, os valores a serem somados tem que ser typeof
// para ser concatenado, os valores tem que ser typeof string!
// para converter a string para number, usamos o Number(string), e para converter number para string, usamos o String(number)

let nome = prompt('Qual seu nome?')
alert(`Oi ${nome}, seja bem vindo!`)
document.write(`Seu nome <strong>${nome}</strong>, tem ${nome.length} letras!`)

// console.log(`O jovem ${nome} de ${idade} anos. está em um estágio de 6 meses como programador e está recebendo ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
// O jovem Luiz de 19. está em um estágio de 6 meses como programador e está recebendo R$ 1.950,50
// let salarioFormatado = salario.toLocaleString('pt-BR', {style: 'currency', currency : 'BRL'})
// console.log(`O jovem ${nome}, de ${idade} de idade, está em um estágio de 6 meses, recebendo por mês um valor líquido de ${salarioFormatado}!`)
// O jovem Luiz, de 19 de idade, está em um estágio de 6 meses, recebendo por mês um valor líquido de R$ 1.950,50!
