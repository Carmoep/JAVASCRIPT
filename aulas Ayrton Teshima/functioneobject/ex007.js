//THIS new, bind, apply, call, aerofunctions

/*function usu(){
console.log(this)
}
new usu()
Print: usu{}*/
function usu() {
    this.nome = 'Carmo'
    this.idade = 27
    this.soma = function(a, b) {
        return a + b 
    }
}
console.log(new usu())
var usu = new usu()
console.log(usu)
console.log(usu.nome)
console.log(usu.idade)
console.log(usu.soma(10, 4))