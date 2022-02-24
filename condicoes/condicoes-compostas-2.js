function calcular(){
    let txtv = document.getElementById("txtvel")
    let res = document.getElementById("res")
    let vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de ${vel}km/h.</p>`
    if(vel > 60){
        res.innerHTML += `<p>Você está acima do permitido, <strong>MULTADO!</strong></p>`
    }
}