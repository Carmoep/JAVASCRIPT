// Como evitar funções anonimas usando closures
/*function inicia() {
    let nome = 'Nina'
    console.log('primeiro')
    setTimeout(function() { //função anônima
        console.log(nome)
    }, 1000)
}
inicia()*/
// Printa 'primeiro' e depois de 1s 'Nina' 

//li 5 - dois parâmetros, a função e o tempo

function impriNomeCompl(nome) {
    return function() {
        console.log(nome, 'Ninona')
    }
}
function inicia() {
    let nome = 'Nina'
    setTimeout(impriNomeCompl(nome), 1000) 
    }
inicia()

//li 14 - colocar o parâmetro nome na função pai
//li 15 - retornar uma nova função filha
//que é a que o setTimeout vai rodar
//li 21 - invocar função com parâmetro nome e tempo
//A função impriNomeCompl retorna outra função raiz
//para o setTimeOut executar