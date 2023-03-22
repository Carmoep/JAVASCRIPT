/*Extrair Propriedades de uma Function
forma tradicional
function printUsu(usuario) {
    console.log(usuario.nome)
    console.log(usuario.idade)
    console.log(usuario.sexo)
}*/
function printUsu({nome, idade, sexo, pais}) {
    console.log(nome),
    console.log(idade)
    console.log(sexo)
    console.log(pais)
}
var usuarioFunc = {
    nome:'Ayrton Teshima',
    idade: 27,
    sexo: 'M',
    pais: 'Brasil'
}
//invocar função e por parâmetros passar os objeto
printUsu(usuarioFunc)
//retornar propriedades do objeto (chaves)
console.log(Object.keys(usuarioFunc))
//retornar valores
console.log(Object.values(usuarioFunc))

