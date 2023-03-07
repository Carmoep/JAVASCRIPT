//set initial count
let countEl = 0
//select value and buttons
const valueEl = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener ('click', (e) => { // e = event object
       const styles = e.currentTarget.classList
       if(styles.contains('decrease')) {
        countEl--
       } else if (styles.contains('increase')) {
        countEl++
       } else {
        countEl = 0
       }
       if (countEl > 0) {
        valueEl.style.color = 'blue'
       }
       if (countEl < 0) {
        valueEl.style.color = 'red'
       }
       if (countEl === 0) {
        valueEl.style.color = '#222'
       }
       valueEl.textContent = countEl
    })
})
