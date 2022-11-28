//iteração usando for 
var usuaFunc = {
    nome:'Ayrton Teshima',
    idade: 27,
    sexo: 'M',
    pais: 'Brasil'
}
//for normal
var props = Object.keys(usuaFunc)
console.log(props)
for (var i = 0; i < props.length; i++) {
    //console.log(prop[i])
    console.log(usuaFunc[props[i]])
}
//for of
for (var prop of props) {
    /*console.log('usuafunc2', usuaFunc[prop])
    sai esse print:
    usuafunc2 Ayrton Teshima
    usuafunc2 27
    usuafunc2 M
    usuafunc2 Brasil*/
}
//for in printando as chaves e os valores junto
for (var prop2 in usuaFunc) {
    if (usuaFunc.hasOwnProperty(prop2))
    console.log(prop2)
    console.log(usuaFunc[prop2])
    //ou console.log(prop2, usuaFunc[prop2])
}
/* realism properties? garantir que a 
propriedade seja inserida no objeto usano if*/
