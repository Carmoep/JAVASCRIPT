
const nextEl = document.querySelector('.next')
const prevEl = document.querySelector('.prev')
const imgCtnEl = document.querySelector('.image-container')
const imgsEl = document.querySelectorAll('img')

let currentImg = 1
let timeOut
//para usar a prop clearTimeout qdo clicar e não duplicar function
nextEl.addEventListener('click', () => {
    currentImg++
    clearTimeout (timeOut)
    updateImg()
})
prevEl.addEventListener('click', () => {
    currentImg--
    clearTimeout (timeOut)
    updateImg()
})
updateImg()//tem que chamar a function aqui...
function updateImg() {
    if(currentImg > imgsEl.length) {
        currentImg = 1 //passa o array e recomeça 
    } else if (currentImg < 1) {
        currentImg = imgsEl.length //o oposto para o prev
    }
    imgCtnEl.style.transform = `translateX(-${(currentImg-1) * 500}px)`
    //currentImg -1 para deixar 0px que é a primeira imagem 
    //não pode deixar espaço dentro dos ()
    //...pra termiunar aqui, daí começa o timer
    timeOut = setTimeout(() => {
        currentImg++
        updateImg()
    }, 5000)
}
