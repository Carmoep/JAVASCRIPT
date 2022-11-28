//CLOSURES dar visibilidade para a varável 
//do escopo pai
function impriNome() {
    let nome = 'Mel'
    return function() {
        return nome
    }
}
impriNome()
var func = impriNome()
console.log(func())
// memoriza o escopo que ela foi criada

//Funcões e variáveis privadas

function minhaBibli() {
    function auxi(valor) {
        return 10 + valor // function escondida
    }
    return {
        add5() {
            //return 10 + 5
            return auxi(5)
        },
        add7() {
            //return 10 + 7
            return auxi(7)
        }
    }
}
let bibli = minhaBibli()
console.log(bibli)
console.log(bibli.add5())
console.log(bibli.add7())
//independente de onde chamar, as funcões 
//auxiliares vão sempre funcionar