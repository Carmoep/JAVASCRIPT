var usuario = {
    nome:'Carmo',
    sobrenome:'Eduarte Pereira',
    idade: 44,
    altura: 1.74,
    'ultimo-nome': 'Pereira',
}
console.log(usuario)
console.log(usuario.altura)
console.log(usuario['ultimo-nome'])
usuario.ano = 2022
console.log(usuario)
delete usuario["ultimo-nome"]
console.log(usuario)
usuario.hobbies = ['Woodworking', 'Code', 'Guitar' ]
console.log(usuario)
usuario.competencias = {
    linguagens: ['JavaScript', 'HTML', 'CSS'],
    ferramentas: ['furadeira', 'tupia', 'tico-tico']
} //ideal é colocar todos juntos
console.log(usuario)

var usuario2 = {
    digaOi: function(nome) {//ou digaOi(nome)
        return `Olá ${nome}`
    }
}
console.log(usuario2.digaOi('Carmo'))

//variável antes:
var cor = 'azul'
var sexo = 'masculino'
var usuario3 = {
    nome:'Carmo', // NÃO ESQUECER A VÍRGULA!
    cor: cor, //ou somente cor
    sexo
}
console.log(usuario3)
/* o valor da variável cor está armazenado na 
propriedade cor do objeto usuário3* (nome da chave
e da variável iguais)*/