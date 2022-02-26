function carregar(){
    let texto = document.getElementById("texto")
    let Photo = document.getElementById("imagem")
    let data = new Date()
    let horaAtual = data.getHours()
    texto.innerHTML = `Agora é ${horaAtual} hora(s)`
    if (horaAtual >= 0 && horaAtual <5){
        document.body.style.background = '#26222d';
        Photo.src = 'fotos/madrugada.jpg'
    } else if(horaAtual >= 5 && horaAtual <12){
        document.body.style.background = '#8fd0d2';
        Photo.src = 'fotos/manha.jpg'
    } else if (horaAtual >= 12 && horaAtual < 18){
        document.body.style.background = '#ea8746';
        Photo.src = 'fotos/tarde.jpg'
    } else if (horaAtual >= 18 && horaAtual <= 23){
        document.body.style.background = '#0e1a3e';
        Photo.src = 'fotos/noite.jpg'
    } else if (horaAtual = 1){
        Photo.src = 'fotos/manha.jpg'
        // texto.innerHTML = `Agora são ${horaAtual} hora`
    }
}