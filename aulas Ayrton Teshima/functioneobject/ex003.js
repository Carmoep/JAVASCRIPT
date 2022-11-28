//getters e setters
var usuarios = [
    {
        nome: 'Roberto',
        idade: 13,
        cor:'Verde',
    },//usar vírgula entre os objetos
    {
        nome:'Maíra',
        idade: 17,
        cor:'Laranja'
    },
    {
        nome:'Carla',
        idade: 25,
        cor:'Marrom',
    }
]
console.log(usuarios)
console.log(usuarios[2])
console.log(usuarios[1].idade)

var usuario = {
    posicao: 0,
    get atual(){
        return usuarios[this.posicao]
    },
    set atual(posicao){
        this.posicao = posicao
    },
    /*duas funções de mesmo nome mas get retorna o valor
    e set atribui o valor*/
    proximo(){ //função proximo p/ incrementar a posição 
        ++this.posicao//this é o próprio objeto usuário 
    }, // NÃO ESQUECER A VÍRGULA
    anterior(){
        --this.posicao
    }
}
console.log(usuario.atual)
usuario.proximo()
console.log(usuario.atual)
usuario.proximo()
console.log(usuario.atual)
usuario.anterior()
console.log(usuario.atual)
usuario.atual = 0
console.log(usuario.atual)
usuario.atual = 2
console.log(usuario.atual)
/*para chamar uma função como uma propriedade, que ela 
só retorna um valor, usar palavra res get*/

//mais um exemplo:

var _v = 0
var obj = {
    get v(){
        return `Value: ${_v}`
    },
    set v(value){
        _v = value * 2
    }
}
console.log(obj.v)
