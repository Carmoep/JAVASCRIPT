//using selectorss inside the element
const questions = document.querySelectorAll('.qstn')

questions.forEach((question) => {
    //console.log(question);
    const btnEl = question.querySelector('.qstn-btn')
    //console.log(btnEl);
    btnEl.addEventListener('click', () => {
        questions.forEach((item) => {
            if(item !== question) {
                item.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
    })
})

//traversing the dom
//encontrar o article usando parentElement no console.log,
//para poder usar o toggle

//const btns = document.querySelectorAll('.qstn-btn')

//btns.forEach((btn) => {
//    btn.addEventListener('click', (e) => {
//       const qstnEl = e.currentTarget.parentElement.parentElement
//        qstnEl.classList.toggle('show-text')
//    })
//})