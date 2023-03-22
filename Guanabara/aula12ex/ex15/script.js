function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = window.document.getElementById('txtano')
var fano = Number(fano.value)
var res = window.document.querySelector('div#res')
if (fano.value == 0 || fano > ano) {
    window.alert('Verifique os dados e tente novamente')
} else {
    var fsexo = document.getElementsByName('radsexo')
    var idade = ano - fano
    res.innerHTML = `Idade calculada ${idade}`
    var gen = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsexo[0].checked) {
        gen = 'Homem'
        if(idade >=0 && idade < 2) {
            img.setAttribute('src', 'bbh.png')
        } else if (idade >= 2 && idade < 12) {
            img.setAttribute('src', 'ch.png')
        } else if(idade < 18) {
            img.setAttribute('src', 'jh.png')
        } else if(idade < 60) {
            img.setAttribute('src', 'ah.png')
        } else { 
            img.setAttribute('src', 'ih.png')
        }
    } else if(fsexo[1].checked) {
        gen = 'Muher'
        if(idade >=0 && idade < 2) {
            img.setAttribute('src', 'bbm.png')
        } else if(idade >= 2 && idade < 12) {
            img.setAttribute('src', 'cm.png')
        } else if(idade < 18) {
            img.setAttribute('src', 'jm.png')
        } else if(idade < 60) {
            img.setAttribute('src', 'am.png')
        } else { 
            img.setAttribute('src', 'im.png')
        }
    }    
    res.innerHTML = `Detectamos ${gen} com ${idade} anos`
    res.style.textAlign = 'center'
    res.appendChild(img)
    
}
}