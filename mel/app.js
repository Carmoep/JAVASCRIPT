const prevEl = document.querySelector('.prev-btn')
const nextEl = document.querySelector('.next-btn')
const slides = document.querySelectorAll('.slide')

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})
let counter = 0
nextEl.addEventListener('click', () => {
    counter++
    carrossel()
})
prevEl.addEventListener('click', () => {
    counter--
    carrossel()
})

function carrossel() {
    if(counter === slides.length) {
        counter = 0
    }
    if(counter < 0) {
        counter = slides.length - 1
    }
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}
