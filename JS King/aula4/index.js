const txtTamEl = document.getElementById('textarea')
const totalCounterEl = document.getElementById('total-counter')
const remCounterEl = document.getElementById('remaning-counter')


txtTamEl.addEventListener('keyup', ()=> {
    updateCounter()
})
function updateCounter() {
    totalCounterEl.innerText = txtTamEl.value.length
    remCounterEl.innerText = 
    txtTamEl.getAttribute('maxLength') - txtTamEl.value.length
}