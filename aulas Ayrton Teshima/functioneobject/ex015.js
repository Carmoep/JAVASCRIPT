//CONSTANTES

const anoNasc = 1978
console.log(anoNasc)
if (true) {
    const autor = 'Carmo'
    console.log(autor)
}

const nome = 'Carmo Pereira'
console.log(nome)


/*  redeclarar reatribuir
var    sim      sim
let    não      sim
const  não      não
*/

var nome1 = 'Rosi'
console.log(nome1)
var nome1 = 'Carmo'//redeclarar
console.log(nome1)
nome1 = 'Mel'//reatribuir
console.log(nome1)

//para redeclarar uma const:
if(true) {
    const nome2 = 'Rosilene Silva'
    console.log(nome2)
}
const nome2 = 'Rosi'
console.log(nome2)

//array pode mudar os valores de dentro
const cores = ['amarelo', 'verde', 'azul']
console.log(cores)
cores[1] = 'vermelho'
console.log(cores)

const usuario = {
    nome3: 'Ayrton',
    idade: 27
}
console.log(usuario)
usuario.idade = 50
usuario.cidade = 'Rio de Janeiro'
console.log(usuario)