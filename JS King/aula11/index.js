
const kits = ['crash', 'kick', 'snare', 'tom']
const ctnEl = document.querySelector('.container')

kits.forEach((kit) => {
    const btnEl = document.createElement('button')
    btnEl.classList.add('btn')
    btnEl.innerText = kit
    btnEl.style.backgroundImage = `url(imagens/${kit}.png)`
    ctnEl.appendChild(btnEl)

    const audioEl = document.createElement('audio')
    audioEl.src = ` url(som/${kit}.mp3)`
    ctnEl.appendChild(audioEl)
    btnEl.addEventListener('click', () => {
        audioEl.play()
    })
    window.addEventListener ('keydown', (event) => {
        console.log(event.key);
        if(event.key === kit.slice(0, 1))
        audioEl.play
        btnEl.style.trasform = 'scale(.9)'
        setTimeout(() => {
            btnEl.style.transform = 'scale'
        },100)
    })
});
//Não funcionou!!! error msg:The media resource indicated by the src attribute or assigned media provider object was not suitable.