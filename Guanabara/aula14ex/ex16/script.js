function calc() {
    var ini = document.querySelector('input#txti')
    var pas = document.querySelector('input#txtp')
    var fim = document.querySelector('input#txtf')
    var res = document.querySelector('div#res')
    if(ini.value.length == 0 || pas.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Esqueceu de colocar um valor!'
    } else if(pas.value <= 0) {
        res.innerHTML = 'Não pode ter passo igual ou menor a zero!'
    } else {
    var ini = Number(txti.value)
    var pas = Number(txtp.value)
    var fim = Number(txtf.value)
    for(i = ini; i <= fim; i += pas) {
        res.innerHTML += ` ${i} \u{1F449}`
    }
    for(i = ini; i >= fim; i -= pas) {
        res.innerHTML += ` ${i} \u{1F449}`
    }
    res.innerHTML += '\u{1F3C1}'
    }
}