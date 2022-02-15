/*
DOM (Document Object Model)
Arvore DOM

        - location (url)
window  - document (documento atual)
        - history (navegação)

document - html

html - head
     - body

head - todas as tags que podemos usar no head são filhas do head

body - todas as tags que podemos usar no body são filhas do body

obs : CADA PÁGINA POSSUI SUA PRÓPRIA ÁRVORE DOM!
*/

// document.write(document.characterSet)  // aqui eu exibo através do document.write qual a codificação que eu to usando no meu documento html
// document.write(document.URL)  // aqui eu peço pra ele me mostrar a URL que está o meu arquivo html

/*
O DOM tem 5 tipos de seleções
- por Marca - getElementsByTagName(nome-da-tag)
- por ID - getElementsById(#id-da-tag)
- por Nome - getElementsByName(nome-do-elemento)
- por Classe - getElementsByClassName(.nome-da-classe)
- por Seletor - 
1 - querySelector()
2 -querySelectorAll()
*/

// let p1 = document.getElementsByTagName("p")[1]
// document.write(`Está escrito assim: ${p1.innerHTML}`)  // o innerHTML pega o texto com toda a formatação que está na tag inline ou no css
// já o innerText vai pegar somente o texto sem formatação alguma
document.body.style.background = 'rgb(46, 46, 87)'  // aqui eu manipulei o DOM pelo javascript para mudar o background que tá no estilo do corpo que está no documento html! basicamente se fosse um diretório eu teria o caminho : arquivo.html/corpo/estilo/cor-de-fundo , isso claro, seguindo a lógica da arvore DOM
// alert(p1.innerText)
document.body.style.color= 'green'  // se fosse um diretório, eu estaria fazendo uma alteração em arquivo.html/corpo/estilo/cor-da-fonte = 'green'

// let d = document.querySelector('div#msg')
// d.style.background = 'green';  // por javascript eu mudei a cor de fundo do id msg
// d.innerText = 'Estou aguardando...';  // por html usando o .innerText eu modifiquei o texto para 'Estou aguardando...'

// div = # // class = . (mesma coisa em CSS3)

//................................//
// div area

// area.addEventListener('click', clicar)
// area.addEventListener('onmouseover', entrar)
// area.addEventListener('mouseout', sair)


// function clicar(){
//     let area = document.getElementById('area')
//     area.innerText = 'Clicou'
// }

// function entrar(){
//     area.style.background = 'black'
//     document.body.style.background = 'black'
//     area.innerText = 'entrou'
// }
// function sair(){
//     area.style.background = 'greenyellow'
//     area.innerText = 'saiu'
//     document.body.style.background = 'rgb(46, 46, 87)'
// }

//...........................
// div somar

function somar(){
    let tn1 = document.querySelector('input#num1')
    let tn2 = document.querySelector('input#num2')
    let res = document.getElementById('res')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let s = n1 + n2
    console.log(`Resultado : ${s}`)
    res.innerText = `Resultado : ${s} (Olhe também o console)`
}
