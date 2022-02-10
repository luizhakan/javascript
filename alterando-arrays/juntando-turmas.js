const salaDePython = ['Melissa', ' Milena', ' e Rodrigo']

const salaDeJavaScript = ['Ju', ' Leo', ' e Raquel']

const salasUnificadas = salaDePython.concat(salaDeJavaScript) // aqui usando o .concat eu unifico as duas arrays numa const só

console.log(salasUnificadas)

console.log(`A sala de Python tem ${salaDePython.length} alunos, ${salaDePython}. E a sala de JavaScript tem ${salaDeJavaScript.length} alunos! ${salaDeJavaScript}.`) // aqui eu só uso template string mesmo '-'