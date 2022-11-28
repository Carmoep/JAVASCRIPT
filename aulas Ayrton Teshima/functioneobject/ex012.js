//ESCOPO LEXICAL POR BLOCO USANDO let
if (true) {
    var nome = 'Rosilene'
    let profis = 'Enfermeira'
    console.log(nome)
    console.log(profis)
}
console.log(nome)
//console.log(profis) não printa pois é let
//e só existe no bloco if

//OUTRAS COISAS SOBRE let:
//NÃO PODE REDECLARAR
let sobrenome = 'Silva'
console.log(sobrenome)
sobrenome = 'de Lima' //sem usar let funciona
console.log(sobrenome)

//pode isolar o bloco com {} que daí funciona
{
    let sobrenome = 'de Lima'
    console.log(sobrenome)
} // mas não é usado
