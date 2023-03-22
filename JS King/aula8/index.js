const btnEl = document.querySelector('.btn')
const closeIconEl = document.querySelector('.close-icon')
const trailerCtnEL = document.querySelector('.trailer-container')
const videoEl = document.querySelector('video')

btnEl.addEventListener('click', () => {
    trailerCtnEL.classList.remove('active')
})

 closeIconEl.addEventListener('click', () => {
    trailerCtnEL.classList.add('active')
    videoEl.pause() //pausa
    videoEl.currentTime = 0 //reseta o vídeo
})