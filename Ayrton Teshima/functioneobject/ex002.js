//merge de dois ou mais objetos
var usuario = {
    nome:'Carmo',
    idade: 44,
}
var extrainfo = {
    pais:'Brasil',
    estado:'São Paulo'
}
//{} é o novo objeto e depois os que vai adicionar
var novoUsuario = Object.assign({}, usuario, extrainfo)
console.log(usuario)
console.log(novoUsuario)
Object.assign(usuario, extrainfo)
console.log(usuario) 
//usuario ficou igual a novoUsuario
//é melhor gerar um novo objeto

//outra maneira
var novoUsuario2 = {
    usuario,
    extrainfo
}
console.log(novoUsuario2)
//Tentei fazer spread ...usuario <br>...extrainfo NÃO FUNCIONOU

var nomeVariavel = 'Estado'
var usuario2 = {
    nome:'Rosilene',
    [nomeVariavel]:'Santa Catarina' 
    //colchetes pra gerar o valor da variável
}
console.log(usuario2)
