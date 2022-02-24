
const alunos = ['João','Juliana','Caio','Ana']

const médiaDosAlunos  =  [10,7,9,6]

let listaDeNotasEAlunos = [alunos, médiaDosAlunos]

const exibeNomeENotas = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua nota é : ' + listaDeNotasEAlunos[1][indice]
    } else{
        return "Aluno não cadastrado"
    }

}

console.log(exibeNomeENotas('Mozart'))
