function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `AGORA SÃO ${hora} HORAS`
    if (hora >= 6 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#d1a67c'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#c5afa4'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#335360'
    }

}

