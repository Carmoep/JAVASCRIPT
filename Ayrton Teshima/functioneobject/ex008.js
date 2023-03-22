//call
function usu(p1, p2, p3) {
    console.log(p1, p2, p3)
    console.log('usuThis', this)
}
var usuThis = {
    nome: 'Carmo'
}
/*usu.call(usuThis, 'param1', 129, [5])

//apply - passa os parâmetros em array
usu.apply(usuThis, ['param2', 653, [1, 2, 3]])*/

//bind - não invoca a function diretamente
usu.bind(usuThis, 'Olá', 29, '!!!')
var persona = usu.bind(usuThis, 'Olá')
persona('Mundo', '!!!')