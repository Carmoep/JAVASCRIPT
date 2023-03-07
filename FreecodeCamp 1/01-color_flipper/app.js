
const colors = ['green', 'red', 'rgba(133,122,200', '#f15025']
const btnEl = document.getElementById('btn')
const colorEl = document.querySelector('.color')

btnEl.addEventListener('click', () => {
    //get random mumber between 0 - 3
    const randomNum = getRandomNum()
    console.log(randomNum);
    document.body.style.backgroundColor = colors[randomNum]
    colorEl.textContent = colors[randomNum]
})
function getRandomNum () {
    return Math.floor(Math.random() * colors.length)
}