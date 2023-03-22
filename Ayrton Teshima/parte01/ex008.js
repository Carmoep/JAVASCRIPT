var numeros = [5, 3, 12, 17, 10, 99]
console.log(numeros)
console.log(numeros[2])
console.log(numeros[5])
console.log(numeros[0])
console.log(numeros.length)
var numeroRetornado = numeros.pop()
console.log('numeroRetornado', numeroRetornado)
console.log(numeros) //saiu o último
console.log(numeros.slice(2, 3))
console.log(numeros.slice(2, 4))
console.log(numeros.slice(3))
console.log(numeros.join('~~'))

var usuario = [
    'Carmo',
    43,
    'Programador a Bordo',
    2022,
    'Brasileiro'
]
console.log(usuario)
usuario.push('SP')
console.log(usuario)
console.log(usuario.includes('Brasileiro'))//tem o item na lista? true
console.log(usuario.includes(2022))
console.log(usuario.indexOf(2019))
console.log(usuario.indexOf(2022))//posição