function calc() {
var num = document.querySelector('input#txtn')
var tab = document.querySelector('select#seltab')
if (num.value.length == 0) {
    window.alert('Por favor, digite um número')
} else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while(c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab ${c}`// para ser usado pelo php (qual foi selecionado)
        tab.appendChild(item)
        c++
    }
}
}