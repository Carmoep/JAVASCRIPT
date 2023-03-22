    var num = document.querySelector('input#txte')
    var cax = document.querySelector('input#txtc')
    var res = document.querySelector('div#res')
    let valores = []

function isnum(n) {
    if(Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

function incax(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function calc() {
    if(isnum(num.value) && !incax(num.value, valores)) {
        window.alert('tudo ok')
    } else {
        window.alert('Valor inválido ou já na lista')
    }
}