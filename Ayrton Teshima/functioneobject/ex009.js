//Arrow Functions =>

//está omitindo a palavra function
var soma = (a, b) => {
    return a + b
}
console.log(soma(10, 10))

//modo omitindo return e chaves também
var soma2 = (a, b) => a + b
console.log(soma(10, 10))

var soma3 = (a, b) => ( 
    a + b
)
console.log(soma(10, 10))

//function que retorna objeto
var retUsu = () => (
    {
        nome: 'Rosilene',
        idade: 40
    }
    //se quiser as chaves na 
    //mesma linha proteger com ()
)
console.log(retUsu())

var retUsu2 = (cidade) => (
    // o cidade pode ficar sem parênteses
    {
        nome: 'Rosilene',
        idade: 40,
        cidade,
        estado: 'Santa Catarina'
    }
)
console.log(retUsu2())

// this na arrow function
var impriThis = () => {
    console.log(this)
}
impriThis()
impriThis.call({})
//não é possível passar o contexto de
//this para arrow function