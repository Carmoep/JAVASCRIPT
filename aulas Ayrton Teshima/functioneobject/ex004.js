//DESTROCTION (acho que é esse o nome da técnica)
var novoUsu = {
    nome: 'Carmo',
    idade: 44,
    pais: 'Brasil',
    youtube: 'Programador a Bordo'
}
var nome = novoUsu.nome
var idade = novoUsu.idade
var pais = novoUsu.pais
console.log(nome)
console.log(idade)
console.log(pais)

//extrair do objeto novoUsu a propriedade idade 
var {idade, nome, pais} = novoUsu
console.log(idade, nome, pais)

/*especificar a propriedade que quer extrair mas 
na variável de outro nome*/
var {nome: priNome} = novoUsu
console.log(priNome)
var {youtube: canal} = novoUsu
console.log(canal)