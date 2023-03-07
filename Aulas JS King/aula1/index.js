const hourEl = document.getElementById ('hour')
const minEl = document.getElementById ('minutes')
const secEl = document.getElementById ('seconds')
const ampmEl = document.getElementById ('ampm')

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ap = 'AM'
    if(h > 12) {
        h = h - 12
        ap = 'PM'
    }

    //Estado de condição 
    // ? = se isso acontecer 
    // : = senão
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s

    hourEl.innerText = h
    minEl.innerText = m
    secEl.innerText = s
    ampmEl.innerText = ap
    setTimeout(() => {
        updateClock() //primeiro parâmetro função
    }, 1000) //segundo parâmetro 1000 milisegundos
}
updateClock()