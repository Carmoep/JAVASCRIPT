//ESCOPO LEXICAL E DINAMICO
function impriThis() {
    console.log('impriThis', this)
}
function impriMens() {
    impriThis.call({msg: 'Sou um objeto'})
}
function impriMens2() {
    impriThis.call(['Sou um array'])
}
//o call invoca o impriThis retornando seu valor
//this é global
impriMens()
impriMens2()
//só vai saber o valor a hora que invoca a função
//impriThis() printa window pq é o defaut do this

function usuario() {
    var nome = 'Ayrton'
    console.log(nome)
    return function() {
        var sobrenome = 'Teshima'
        console.log(nome, sobrenome)
    }
}
usuario()
//tem outra funcão dentro, então só vai printar 
//o sobrenome se usar var
var usur = usuario()
usur()

