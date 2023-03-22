
const imgCtnEl = document.querySelector('.image-container')
const btnEl = document.querySelector('.btn')

btnEl.addEventListener('click', () => {
    imgNum = 3
    addNewImg()
})
function addNewImg () {
for (let index = 0; index < imgNum; index++) {
        const newImgEl = document.createElement('img')
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`
        imgCtnEl.appendChild(newImgEl)
    }
}
//colocar a function dentro do for loop gerando mais 3 imagens