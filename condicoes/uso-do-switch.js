// CONDIÇÃO MÚLTIPLA
let agora = new Date()
let diaSem = agora.getDay()
// O SWITCH É UMA ESTRUTURA MAIS LIMITADA QUE O IF, MAS É MUITO ÚTIL EM SITUAÇÕES PONTUAIS
switch(diaSem){
    case 0: // se diaSem for igual a 0
        console.log(`Domingo`)
    break  // ESSE BREAK É OBRIGATÓRIO
    case 1: // se diaSem for igual a 1
        console.log(`Segunda-Feira`)
    break  // ESSE BREAK É OBRIGATÓRIO
    case 2: // se diaSem for igual a 2
        console.log('Terça-Feira')
        break  // ESSE BREAK É OBRIGATÓRIO
    case 3: // se diaSem for igual a 3
        console.log('Quarta-Feira')
        break  // ESSE BREAK É OBRIGATÓRIO
    case 4: // se diaSem for igual a 4
        console.log('Quinta-Feira')
        break  // ESSE BREAK É OBRIGATÓRIO
    case 5: // se diaSem for igual a 5
        console.log('Sexta feira')
        break  // ESSE BREAK É OBRIGATÓRIO
    case 6: // se diaSem for igual a 6
        console.log('Sábado')
    break  // ESSE BREAK É OBRIGATÓRIO
    default: // se for qualquer número diferente desses 7 acima
        console.log('[ERRO] Dia Inválido')
    break   // ESSE BREAK É OPCIONAL, JÁ QUE NÃO TEM MAIS COMANDOS EM BAIXO!
}