//ESCOPOS E let
var nome = 'Carmo' //variável global
console.log(nome)
function impriNome() {
    console.log(nome)
}
impriNome()
console.log(nome)
function impriIdade() {
    var idade = 44 //com var
    console.log(idade)
}
impriIdade()
//console.log(idade) dá erro porque está fora do escopo

function impriPais() {
    pais = 'Brasil'//sem var
    console.log(pais)
}
impriPais()
console.log(pais)
console.log(window.pais)//era pra dar certo
console.log(this.pais) //era pra dar certo
//quando não usa var o escopo 
//da propriedade é global
