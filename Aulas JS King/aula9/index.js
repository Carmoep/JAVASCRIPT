const ctnEl = document.querySelector('.container')
const btnEl = document.querySelector('.btn')
const popupCtnEl = document.querySelector('.popup-container')
const closeIconEl = document.querySelector('.close-icon')

btnEl.addEventListener('click', () => {
    ctnEl.classList.add('active')
    popupCtnEl.classList.remove('active')
})
closeIconEl.addEventListener('click', () => {
    ctnEl.classList.remove('active')
    popupCtnEl.classList.add('active')
})