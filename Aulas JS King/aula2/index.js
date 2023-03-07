//função random() da propriedade Math
//para números inteiros Math.ceil
const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const correctAns = num1 * num2

const questionEl = document.getElementById ('question')
questionEl.innerText = `What is ${num1} multiply by ${num2}?`

const formEl = document.getElementById('form')

const inputEl = document.getElementById('input')

//usar JSON.parse para não retornar string
let score = JSON.parse(localStorage.getItem('score'))

// o + do input faz retornar number
formEl.addEventListener('submit', () => {
    const userAns = +inputEl.value
    if(userAns === correctAns) {
        score++
        upLocStorage()
    }
    else {
        score--
        upLocStorage()
    }
})
// para retornar string e poder guardar a 
// informação: JSON.stringify 
function upLocStorage() {
    localStorage.setItem('score', JSON.stringify(score))
}
if (!score) { //para prevenir erros
    score = 0
} 
const scoreEl = document.getElementById('score')

scoreEl.innerText = `score: ${score}`
