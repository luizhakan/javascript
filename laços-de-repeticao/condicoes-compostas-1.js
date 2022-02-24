// Condição composta
// let vel = 60;
// console.log(`A velocidade do seu carro é ${vel}km/h`)
// if(vel > 60){
//     console.log(`Você acima do permitido, MULTADO!`)
// } else{
//     console.log('Dirija sempre com cinto de segurança!')
// }
// let país = 'França'
// if(país == 'Brasil' /*Se o país for igual a Brasil.*/){
//     console.log(`Vivendo em ${país}, você é brasileiro!`)
// } else /*Se não for igual a Brasil*/{
//     console.log(`Vivendo em ${país}, você é estrangeiro!`)
// }
//  ou... também eu posso fazer desse modo
// if(país != "Brasil"/*Se o país for diferente de Brasil*/){
//     console.log(`Vivendo em ${país}, você é estrangeiro!`)
// } else/*Se país não for diferente de Brasil*/{
//     console.log(`Vivendo em ${país}, você é brasileiro!`)
// }

function confirmar(){
    let txt = document.querySelector("input#paísDeNascimento")
    let res = document.querySelector("div#res")
    let país = String(txt.value)
    let minusculo = país.toLocaleLowerCase()
    // res.innerHTML = `Você mora em ${país}`
    if(país == "Brasil" || país == "brasil" || país == "br"){
        res.innerHTML += `<p>Nascido em <strong>${minusculo}</strong>, você é brasileiro!</p>`
    } else{
        res.innerHTML += `<p>Nascido em <strong>${minusculo}</strong>, você é estrangeiro!</p>`
    }
}