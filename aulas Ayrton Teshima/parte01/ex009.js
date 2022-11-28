var usuario = [
    'Carmo',
    43,
    'Programador a Bordo',
    2022,
    'Brasileiro'
]
var arr1 = [3, 2, 1]
var arr2 = ['Programador', 'a', 'Bordo']//pode adicionar mais var
var resultado  = arr1.concat(arr2)//pode adicionar mais concat
console.log(resultado)
console.log([...arr1, arr2])
console.log([arr1, arr2])
console.log([...arr1, ...arr2])
var nome = usuario [0]
console.log(nome)

var idade = usuario[1]
var ano = usuario [3]
console.log(nome, idade, ano)
var [nome, idade, , ano] = usuario //pulou um
console.log(nome, idade, ano)//mesmo resultado
