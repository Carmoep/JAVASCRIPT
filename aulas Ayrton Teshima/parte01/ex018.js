var subtraiDoisNum = function subtrai (a, b) {
    return a - b
}
console.log(subtraiDoisNum (10, 3))

var subtraiTresNum = function (a, b, c) {
    return a - b - c //função anônima (só tirar o nome)
}
console.log (subtraiTresNum (15, 3, 5))

//callback - função como parâmetro de otra função
function somaCallback(a, b, fnCallback) {
    return fnCallback(a + b)
}
console.log(somaCallback(10, 3, function(total) {
    return total * 2
}))
//ou
var multiplica = function (total) {
    return total * 2
}
console.log(somaCallback(10, 3, multiplica))

console.log(somaCallback(5, 2, function(total) {
    return total + 20
}))
console.log(somaCallback(23, 11, function(total) {
    return total / 2
}))
