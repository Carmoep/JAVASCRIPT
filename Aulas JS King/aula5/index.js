
const navEl = document.querySelector('.navbar')
const btnContEl = document.querySelector('.bottom-container')

console.log(navEl.offsetHeight) // altura do offset rs

console.log(btnContEl.offsetTop)
// offsetTop é qdo a extremidade sup atinge a margem do texto

//console.log(window.scrollY); conta qto px rolou, o zoom muda os valores
window.addEventListener('scroll', () => {
    if (window.scrollY > btnContEl.offsetTop - navEl.offsetHeight - 50) {
        navEl.classList.add('active') //aciona classe
    } else {
        navEl.classList.remove("active")
    }
})
