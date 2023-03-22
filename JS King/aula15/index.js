
const ctnEl = document.querySelector('.container')
const carrers = ['Web Developer', 'Chef', 'Woodworker', 'Instructor']
let carrerIndex = 0
let characIndex = 0

function updateTxt() {
    characIndex++
    ctnEl.innerHTML = `<h1>I am ${carrers[carrerIndex].slice(0,1) === 'I' ? 'an' : 'a'} ${carrers[carrerIndex].slice(0,characIndex)} </h1>`
    if(characIndex === carrers[carrerIndex].length) {
        carrerIndex++
        characIndex = 0
    }
    if(carrerIndex === carrers.length) {
        carrerIndex = 0
    }
    setTimeout(updateTxt, 300)
}
updateTxt()

