const bgImgEl = document.getElementById('bg-image')

window.addEventListener('scroll', () => {
    updateImage ()
})
function updateImage() {
    bgImgEl.style.opacity = 1 - window.pageYOffset / 800 //testar log
    bgImgEl.style.backgroundSize = 160 - window.pageYOffset / 20 + '%'
}
