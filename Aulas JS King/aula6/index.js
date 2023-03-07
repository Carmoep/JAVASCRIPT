
const contEl = document.querySelector('.container')

for (let index = 0; index < 30; index++) {
    const colorContEl = document.createElement('div') //criar elemento
    colorContEl.classList.add('color-container') //adicionar css
    contEl.appendChild(colorContEl) //acrescentar el. como child
}
function rdmColor() {
    const chars = '0123456789abcdef'
    const colorCodeLe = 6
    let colorCode = ''
    for (let index = 0; index < colorCodeLe; index++) {
        const rdmNum = Math.floor(Math.random() * chars.length)
        colorCode += chars.substring (rdmNum, rdmNum + 1)
        //floor retorna numero inteiro mais próximo
        //vai adicionando numero até 6
        //substring tira uma parte da string de chars
        
    }
    return colorCode
}

const allColorContEl = document.querySelectorAll('.color-container')

function genColors () {
    allColorContEl.forEach((colorContEl) => {
        const newColorCode = rdmColor()
        colorContEl.style.backgroundColor = '#' + newColorCode 
        //print da nova cor
        colorContEl.innerText = '#' + newColorCode
        //print do código
    })
}
genColors()