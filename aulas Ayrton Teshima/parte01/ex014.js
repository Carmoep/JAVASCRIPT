function escreva() {
    console.log('Olá!')
}
escreva()

function print(mensagem) {
    console.log(mensagem)
}
print('Hello World!')
print('Carmo')

function soma(a, b) {
    return a + b //ao invés de printar
}
var resSoma = soma(10, 5)
console.log(resSoma) // ou
console.log(soma(10, 5))

function somat(valores) {
    for (var num of valores) {
        total += num
    }
        return total
    }
    var total = 0
    var valores = [2, 7, 9, 4, 6, 3]
    var res = somat(valores)
    console.log(res)
